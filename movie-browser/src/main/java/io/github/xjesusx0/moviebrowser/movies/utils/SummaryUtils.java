package io.github.xjesusx0.moviebrowser.movies.utils;

import io.github.xjesusx0.moviebrowser.movies.dto.ContentSummaryDto;
import io.github.xjesusx0.moviebrowser.movies.dto.PagedResponseDto;
import io.github.xjesusx0.moviebrowser.movies.imdb.mappers.ContentMapper;
import io.github.xjesusx0.moviebrowser.movies.imdb.models.ImdbListTitlesResponse;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public final class SummaryUtils {

    private final ContentMapper mapper;

    public PagedResponseDto<ContentSummaryDto> toPagedSummary(
            ImdbListTitlesResponse response) {
        if (response == null || response.titles() == null) {
            return new PagedResponseDto<>(List.of(), null);
        }
        var items = response.titles().stream()
                .map(mapper::toSummary)
                .toList();
        return new PagedResponseDto<>(items, response.nextPageToken());
    }
}
