package io.github.xjesusx0.moviebrowser.movies.dto;

import java.util.List;

public record SeriesDetailDto(
        String id,
        String title,
        String originalTitle,
        Integer startYear,
        Integer endYear,
        String plot,
        String posterUrl,
        List<String> genres,
        List<String> countries,
        List<String> languages,
        RatingDto rating,
        List<PersonDto> directors,
        List<PersonDto> cast,
        Integer totalSeasons
) {}