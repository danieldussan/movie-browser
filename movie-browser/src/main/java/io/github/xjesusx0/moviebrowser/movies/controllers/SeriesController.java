package io.github.xjesusx0.moviebrowser.movies.controllers;

import io.github.xjesusx0.moviebrowser.movies.dto.ContentSummaryDto;
import io.github.xjesusx0.moviebrowser.movies.dto.EpisodeDto;
import io.github.xjesusx0.moviebrowser.movies.dto.PagedResponseDto;
import io.github.xjesusx0.moviebrowser.movies.dto.SeasonDto;
import io.github.xjesusx0.moviebrowser.movies.dto.SeriesDetailDto;
import io.github.xjesusx0.moviebrowser.movies.services.SeriesService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/series")
@RequiredArgsConstructor
@Tag(name = "Series", description = "Endpoints for browsing TV series, seasons, and episodes from IMDB")
public class SeriesController {

    private final SeriesService seriesService;

    @Operation(summary = "Get series details by IMDB ID")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Series found",
                    content = @Content(schema = @Schema(implementation = SeriesDetailDto.class))),
            @ApiResponse(responseCode = "404", description = "Series not found", content = @Content)
    })
    @GetMapping("/{id}")
    public ResponseEntity<SeriesDetailDto> getById(
            @Parameter(description = "IMDB title ID", example = "tt0903747", required = true)
            @PathVariable String id) {
        return ResponseEntity.ok(seriesService.getById(id));
    }

    @Operation(summary = "List seasons of a series")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "List of seasons returned successfully"),
            @ApiResponse(responseCode = "404", description = "Series not found", content = @Content)
    })
    @GetMapping("/{id}/seasons")
    public ResponseEntity<List<SeasonDto>> getSeasons(
            @Parameter(description = "IMDB title ID", example = "tt0903747", required = true)
            @PathVariable String id) {
        return ResponseEntity.ok(seriesService.getSeasons(id));
    }

    @Operation(summary = "List episodes of a specific season")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "List of episodes returned successfully"),
            @ApiResponse(responseCode = "404", description = "Series or season not found", content = @Content)
    })
    @GetMapping("/{id}/seasons/{seasonNumber}/episodes")
    public ResponseEntity<List<EpisodeDto>> getEpisodes(
            @Parameter(description = "IMDB title ID", example = "tt0903747", required = true)
            @PathVariable String id,
            @Parameter(description = "Season number", example = "1", required = true)
            @PathVariable int seasonNumber) {
        return ResponseEntity.ok(seriesService.getEpisodes(id, seasonNumber));
    }

    @Operation(summary = "List popular series", description = "Returns a paginated list of currently popular TV series.")
    @ApiResponse(responseCode = "200", description = "Paginated list of popular series")
    @GetMapping("/popular")
    public ResponseEntity<PagedResponseDto<ContentSummaryDto>> getPopular(
            @Parameter(description = "Token for the next page of results")
            @RequestParam(required = false) String pageToken) {
        return ResponseEntity.ok(seriesService.getPopular(pageToken));
    }

    @Operation(summary = "List top-rated series", description = "Returns a paginated list of top-rated TV series by vote score.")
    @ApiResponse(responseCode = "200", description = "Paginated list of top-rated series")
    @GetMapping("/top-rated")
    public ResponseEntity<PagedResponseDto<ContentSummaryDto>> getTopRated(
            @Parameter(description = "Token for the next page of results")
            @RequestParam(required = false) String pageToken) {
        return ResponseEntity.ok(seriesService.getTopRated(pageToken));
    }

    @Operation(summary = "List trending series", description = "Returns a paginated list of currently trending TV series.")
    @ApiResponse(responseCode = "200", description = "Paginated list of trending series")
    @GetMapping("/trending")
    public ResponseEntity<PagedResponseDto<ContentSummaryDto>> getTrending(
            @Parameter(description = "Token for the next page of results")
            @RequestParam(required = false) String pageToken) {
        return ResponseEntity.ok(seriesService.getTrending(pageToken));
    }
}
