package io.github.xjesusx0.moviebrowser.movies.dto;

public record EpisodeDto(
        String id,
        String title,
        Integer seasonNumber,
        Integer episodeNumber,
        String plot,
        String thumbnailUrl,
        Double rating,
        Integer runtimeMinutes
) {}