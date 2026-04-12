package io.github.xjesusx0.moviebrowser.movies.controllers;

import io.github.xjesusx0.moviebrowser.movies.dto.ContentSummaryDto;
import io.github.xjesusx0.moviebrowser.movies.services.SearchService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/search")
@RequiredArgsConstructor
@Tag(name = "Search", description = "Full-text search across movies and series")
public class SearchController {

    private final SearchService searchService;

    @Operation(summary = "Search movies and series",
            description = "Performs a full-text search across IMDB titles. Returns a flat list of matching movies and series summaries.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Search results returned successfully",
                    content = @Content(schema = @Schema(implementation = ContentSummaryDto.class))),
            @ApiResponse(responseCode = "400", description = "Missing or empty query parameter", content = @Content)
    })
    @GetMapping
    public ResponseEntity<List<ContentSummaryDto>> search(
            @Parameter(description = "Search term to query IMDB titles", example = "Inception", required = true)
            @RequestParam String query) {
        return ResponseEntity.ok(searchService.search(query));
    }
}