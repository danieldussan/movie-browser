package io.github.xjesusx0.moviebrowser.movies.dto;

import java.util.List;

public record MovieDetailDto(
        String id,
        String title,
        String originalTitle,
        Integer year,
        Integer runtimeMinutes,
        String plot,
        String posterUrl,
        List<String> genres,
        List<String> countries,
        List<String> languages,
        RatingDto rating,
        List<PersonDto> directors,
        List<PersonDto> writers,
        List<PersonDto> cast
) {}