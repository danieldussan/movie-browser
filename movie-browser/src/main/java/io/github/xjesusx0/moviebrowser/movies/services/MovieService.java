package io.github.xjesusx0.moviebrowser.movies.services;

import io.github.xjesusx0.moviebrowser.movies.dto.ContentSummaryDto;
import io.github.xjesusx0.moviebrowser.movies.dto.MovieDetailDto;
import io.github.xjesusx0.moviebrowser.movies.dto.PagedResponseDto;
import io.github.xjesusx0.moviebrowser.movies.imdb.clients.ImdbClient;
import io.github.xjesusx0.moviebrowser.movies.imdb.mappers.ContentMapper;
import io.github.xjesusx0.moviebrowser.movies.imdb.models.ImdbListTitlesResponse;
import io.github.xjesusx0.moviebrowser.movies.utils.SummaryUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MovieService {

    private final ImdbClient imdbClient;
    private final ContentMapper mapper;
    private final SummaryUtils summaryUtils;
    
    private static final List<String> MOVIE_TYPES = List.of("MOVIE", "TV_MOVIE");

    public MovieDetailDto getById(String id) {
        var title = imdbClient.getTitleById(id);
        return mapper.toMovieDetail(title);
    }

    public PagedResponseDto<ContentSummaryDto> getPopular(String pageToken) {
        var response = imdbClient.listTitles(
                MOVIE_TYPES, "SORT_BY_USER_RATING_COUNT", "DESC", 50_000, null, null, null, pageToken
        );
        return summaryUtils.toPagedSummary(response);
    }

    public PagedResponseDto<ContentSummaryDto> getTopRated(String pageToken) {
        var response = imdbClient.listTitles(
                MOVIE_TYPES, "SORT_BY_USER_RATING", "DESC", 10_000, null, null, null, pageToken
        );
        return summaryUtils.toPagedSummary(response);
    }

    public PagedResponseDto<ContentSummaryDto> getTrending(String pageToken) {
        var response = imdbClient.listTitles(
                MOVIE_TYPES, "SORT_BY_POPULARITY", "ASC", 1_000, null, null, null, pageToken
        );
        return summaryUtils.toPagedSummary(response);
    }

    public PagedResponseDto<ContentSummaryDto> getByGenre(String genre, String pageToken) {
        var response = imdbClient.listTitles(
                MOVIE_TYPES, "SORT_BY_POPULARITY", "ASC", null, null, null, List.of(genre), pageToken
        );
        return summaryUtils.toPagedSummary(response);
    }
}