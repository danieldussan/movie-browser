package io.github.xjesusx0.moviebrowser.movies.imdb.models;

public record ImdbName(
        String id,
        String displayName,
        ImdbImage primaryImage
) {}