package io.github.xjesusx0.moviebrowser.movies.dto;

import java.util.List;

public record PagedResponseDto<T>(List<T> results, String nextPageToken) {}
