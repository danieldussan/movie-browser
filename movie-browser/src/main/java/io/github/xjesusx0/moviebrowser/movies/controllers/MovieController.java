package io.github.xjesusx0.moviebrowser.movies.controllers;

import io.github.xjesusx0.moviebrowser.movies.dto.ContentSummaryDto;
import io.github.xjesusx0.moviebrowser.movies.dto.MovieDetailDto;
import io.github.xjesusx0.moviebrowser.movies.dto.PagedResponseDto;
import io.github.xjesusx0.moviebrowser.movies.services.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/movies")
@RequiredArgsConstructor
public class MovieController {

    private final MovieService movieService;

    @GetMapping("/{id}")
    public ResponseEntity<MovieDetailDto> getById(@PathVariable String id) {
        return ResponseEntity.ok(movieService.getById(id));
    }

    @GetMapping("/popular")
    public ResponseEntity<PagedResponseDto<ContentSummaryDto>> getPopular(
            @RequestParam(required = false) String pageToken) {
        return ResponseEntity.ok(movieService.getPopular(pageToken));
    }

    @GetMapping("/top-rated")
    public ResponseEntity<PagedResponseDto<ContentSummaryDto>> getTopRated(
            @RequestParam(required = false) String pageToken) {
        return ResponseEntity.ok(movieService.getTopRated(pageToken));
    }

    @GetMapping("/trending")
    public ResponseEntity<PagedResponseDto<ContentSummaryDto>> getTrending(
            @RequestParam(required = false) String pageToken) {
        return ResponseEntity.ok(movieService.getTrending(pageToken));
    }

    @GetMapping("/genre/{genre}")
    public ResponseEntity<PagedResponseDto<ContentSummaryDto>> getByGenre(
            @PathVariable String genre,
            @RequestParam(required = false) String pageToken) {
        return ResponseEntity.ok(movieService.getByGenre(genre, pageToken));
    }
}