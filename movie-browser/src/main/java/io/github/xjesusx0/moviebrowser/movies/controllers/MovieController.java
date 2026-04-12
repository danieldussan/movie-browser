package io.github.xjesusx0.moviebrowser.movies.controllers;

import io.github.xjesusx0.moviebrowser.movies.dto.ContentSummaryDto;
import io.github.xjesusx0.moviebrowser.movies.dto.MovieDetailDto;
import io.github.xjesusx0.moviebrowser.movies.dto.PagedResponseDto;
import io.github.xjesusx0.moviebrowser.movies.services.MovieService;
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

@RestController
@RequestMapping("/api/v1/movies")
@RequiredArgsConstructor
@Tag(name = "Movies", description = "Endpoints for browsing movies from IMDB")
public class MovieController {

    private final MovieService movieService;

    @Operation(summary = "Get movie details by IMDB ID")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Movie found",
                    content = @Content(schema = @Schema(implementation = MovieDetailDto.class))),
            @ApiResponse(responseCode = "404", description = "Movie not found", content = @Content)
    })
    @GetMapping("/{id}")
    public ResponseEntity<MovieDetailDto> getById(
            @Parameter(description = "IMDB title ID", example = "tt0111161", required = true)
            @PathVariable String id) {
        return ResponseEntity.ok(movieService.getById(id));
    }

    @Operation(summary = "List popular movies", description = "Returns a paginated list of currently popular movies.")
    @ApiResponse(responseCode = "200", description = "Paginated list of popular movies")
    @GetMapping("/popular")
    public ResponseEntity<PagedResponseDto<ContentSummaryDto>> getPopular(
            @Parameter(description = "Token for the next page of results")
            @RequestParam(required = false) String pageToken) {
        return ResponseEntity.ok(movieService.getPopular(pageToken));
    }

    @Operation(summary = "List top-rated movies", description = "Returns a paginated list of top-rated movies by vote score.")
    @ApiResponse(responseCode = "200", description = "Paginated list of top-rated movies")
    @GetMapping("/top-rated")
    public ResponseEntity<PagedResponseDto<ContentSummaryDto>> getTopRated(
            @Parameter(description = "Token for the next page of results")
            @RequestParam(required = false) String pageToken) {
        return ResponseEntity.ok(movieService.getTopRated(pageToken));
    }

    @Operation(summary = "List trending movies", description = "Returns a paginated list of currently trending movies.")
    @ApiResponse(responseCode = "200", description = "Paginated list of trending movies")
    @GetMapping("/trending")
    public ResponseEntity<PagedResponseDto<ContentSummaryDto>> getTrending(
            @Parameter(description = "Token for the next page of results")
            @RequestParam(required = false) String pageToken) {
        return ResponseEntity.ok(movieService.getTrending(pageToken));
    }

    @Operation(summary = "List movies by genre", description = "Returns a paginated list of movies filtered by a specific genre.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Paginated list of movies for the given genre"),
            @ApiResponse(responseCode = "400", description = "Invalid genre value", content = @Content)
    })
    @GetMapping("/genre/{genre}")
    public ResponseEntity<PagedResponseDto<ContentSummaryDto>> getByGenre(
            @Parameter(description = "Genre name (e.g. Action, Drama, Comedy)", example = "Action", required = true)
            @PathVariable String genre,
            @Parameter(description = "Token for the next page of results")
            @RequestParam(required = false) String pageToken) {
        return ResponseEntity.ok(movieService.getByGenre(genre, pageToken));
    }
}