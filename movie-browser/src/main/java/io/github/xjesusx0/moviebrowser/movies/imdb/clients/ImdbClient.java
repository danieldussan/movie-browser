package io.github.xjesusx0.moviebrowser.movies.imdb.clients;

import io.github.xjesusx0.moviebrowser.movies.imdb.models.*;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.service.annotation.GetExchange;
import org.springframework.web.service.annotation.HttpExchange;

import java.util.List;

@HttpExchange
public interface ImdbClient {

    @GetExchange("/search/titles")
    ImdbSearchResponse searchTitles(
            @RequestParam("query") String query,
            @RequestParam(value = "limit", required = false) Integer limit
    );

    @GetExchange("/titles/{titleId}")
    ImdbTitle getTitleById(@PathVariable String titleId);

    @GetExchange("/titles")
    ImdbListTitlesResponse listTitles(
            @RequestParam(value = "types", required = false) List<String> types,
            @RequestParam(value = "sortBy", required = false) String sortBy,
            @RequestParam(value = "sortOrder", required = false) String sortOrder,
            @RequestParam(value = "minVoteCount", required = false) Integer minVoteCount,
            @RequestParam(value = "startYear", required = false) Integer startYear,
            @RequestParam(value = "endYear", required = false) Integer endYear,
            @RequestParam(value = "genres", required = false) List<String> genres,
            @RequestParam(value = "pageToken", required = false) String pageToken
    );

    @GetExchange("/titles/{titleId}/seasons")
    ImdbSeasonsResponse getSeasons(@PathVariable String titleId);

    @GetExchange("/titles/{titleId}/episodes")
    ImdbEpisodesResponse getEpisodes(
            @PathVariable String titleId,
            @RequestParam(value = "season", required = false) String season,
            @RequestParam(value = "pageSize", required = false) Integer pageSize
    );

    @GetExchange("/titles/{titleId}/images")
    ImdbImagesResponse getImages(
            @PathVariable String titleId,
            @RequestParam(value = "types", required = false) List<String> types,
            @RequestParam(value = "pageSize", required = false) Integer pageSize
    );
}
