package io.github.xjesusx0.moviebrowser.movies.imdb.models;

public record ImdbRating(
        Double aggregateRating,
        Integer voteCount
) {}