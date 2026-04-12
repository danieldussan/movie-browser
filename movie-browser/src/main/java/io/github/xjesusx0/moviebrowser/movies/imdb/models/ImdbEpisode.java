package io.github.xjesusx0.moviebrowser.movies.imdb.models;

public record ImdbEpisode(
        String id,
        String primaryTitle,
        Integer season,
        Integer episode,
        String plot,
        ImdbImage primaryImage,
        ImdbRating rating,
        Integer runtimeSeconds
) {}