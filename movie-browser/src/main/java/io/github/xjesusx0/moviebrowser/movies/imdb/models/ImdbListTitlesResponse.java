package io.github.xjesusx0.moviebrowser.movies.imdb.models;

import java.util.List;

public record ImdbListTitlesResponse(List<ImdbTitle> titles, String nextPageToken) {}
