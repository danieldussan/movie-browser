package io.github.xjesusx0.moviebrowser.movies.dto;

import java.util.List;

public record ContentSummaryDto(
        String id,
        String title,
        String type,
        Integer year,
        String posterUrl,
        Double rating,
        List<String> genres
) {}