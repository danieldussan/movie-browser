package io.github.xjesusx0.moviebrowser.movies.imdb.models;

import java.util.List;

public record ImdbTitle(
        String id,
        String type,
        String primaryTitle,
        String originalTitle,
        Boolean isAdult,
        Integer startYear,
        Integer endYear,
        Integer runtimeSeconds,
        List<String> genres,
        ImdbImage primaryImage,
        ImdbRating rating,
        ImdbMetacritic metacritic,
        String plot,
        List<ImdbName> directors,
        List<ImdbName> writers,
        List<ImdbName> stars,
        List<ImdbCountry> originCountries,
        List<ImdbLanguage> spokenLanguages
) {}