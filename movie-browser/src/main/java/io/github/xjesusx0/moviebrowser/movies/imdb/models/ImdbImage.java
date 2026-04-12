package io.github.xjesusx0.moviebrowser.movies.imdb.models;

public record ImdbImage(
        String id,
        String url,
        String type,
        String caption,
        Integer width,
        Integer height
) {}