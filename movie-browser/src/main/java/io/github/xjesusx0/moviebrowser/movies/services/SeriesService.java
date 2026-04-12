package io.github.xjesusx0.moviebrowser.movies.services;

import io.github.xjesusx0.moviebrowser.movies.dto.*;
import io.github.xjesusx0.moviebrowser.movies.imdb.clients.ImdbClient;
import io.github.xjesusx0.moviebrowser.movies.imdb.mappers.ContentMapper;
import io.github.xjesusx0.moviebrowser.movies.imdb.models.ImdbListTitlesResponse;
import io.github.xjesusx0.moviebrowser.movies.utils.SummaryUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SeriesService {

    private final ImdbClient imdbClient;
    private final ContentMapper mapper;
    private final SummaryUtils summaryUtils;

    private static final List<String> SERIES_TYPES = List.of("TV_SERIES", "TV_MINI_SERIES");

    public SeriesDetailDto getById(String id) {
        var title = imdbClient.getTitleById(id);
        var seasons = getSeasons(id);
        return mapper.toSeriesDetail(title, seasons.size());
    }

    public List<SeasonDto> getSeasons(String id) {
        var response = imdbClient.getSeasons(id);
        if (response == null || response.seasons() == null) return List.of();
        return response.seasons().stream().map(mapper::toSeason).toList();
    }

    public List<EpisodeDto> getEpisodes(String id, int seasonNumber) {
        var response = imdbClient.getEpisodes(id, String.valueOf(seasonNumber), 50);
        if (response == null || response.episodes() == null) return List.of();
        return response.episodes().stream().map(mapper::toEpisode).toList();
    }

    public PagedResponseDto<ContentSummaryDto> getPopular(String pageToken) {
        var response = imdbClient.listTitles(
                SERIES_TYPES, "SORT_BY_USER_RATING_COUNT", "DESC", 50_000, null, null, null, pageToken
        );
        return summaryUtils.toPagedSummary(response);
    }

    public PagedResponseDto<ContentSummaryDto> getTopRated(String pageToken) {
        var response = imdbClient.listTitles(
                SERIES_TYPES, "SORT_BY_USER_RATING", "DESC", 10_000, null, null, null, pageToken
        );
        return summaryUtils.toPagedSummary(response);
    }

    public PagedResponseDto<ContentSummaryDto> getTrending(String pageToken) {
        var response = imdbClient.listTitles(
                SERIES_TYPES, "SORT_BY_POPULARITY", "ASC", 1_000, null, null, null, pageToken
        );
        return summaryUtils.toPagedSummary(response);
    }
}