package io.github.xjesusx0.moviebrowser.movies.imdb.models;

import java.util.List;

public record ImdbEpisodesResponse(List<ImdbEpisode> episodes, String nextPageToken) {}
