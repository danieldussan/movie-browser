package io.github.xjesusx0.moviebrowser.movies.services;


import io.github.xjesusx0.moviebrowser.movies.dto.ContentSummaryDto;
import io.github.xjesusx0.moviebrowser.movies.imdb.clients.ImdbClient;
import io.github.xjesusx0.moviebrowser.movies.imdb.mappers.ContentMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SearchService {

    private final ImdbClient imdbClient;
    private final ContentMapper mapper;

    public List<ContentSummaryDto> search(String query) {
        var response = imdbClient.searchTitles(query, 20);
        if (response == null || response.titles() == null) return List.of();
        return response.titles().stream()
                .map(mapper::toSummary)
                .toList();
    }
}