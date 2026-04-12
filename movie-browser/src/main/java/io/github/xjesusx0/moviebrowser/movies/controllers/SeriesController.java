package io.github.xjesusx0.moviebrowser.movies.controllers;

import io.github.xjesusx0.moviebrowser.movies.dto.*;
import io.github.xjesusx0.moviebrowser.movies.services.SeriesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/series")
@RequiredArgsConstructor
public class SeriesController {

    private final SeriesService seriesService;

    @GetMapping("/{id}")
    public ResponseEntity<SeriesDetailDto> getById(@PathVariable String id) {
        return ResponseEntity.ok(seriesService.getById(id));
    }

    @GetMapping("/{id}/seasons")
    public ResponseEntity<List<SeasonDto>> getSeasons(@PathVariable String id) {
        return ResponseEntity.ok(seriesService.getSeasons(id));
    }

    @GetMapping("/{id}/seasons/{seasonNumber}/episodes")
    public ResponseEntity<List<EpisodeDto>> getEpisodes(
            @PathVariable String id,
            @PathVariable int seasonNumber) {
        return ResponseEntity.ok(seriesService.getEpisodes(id, seasonNumber));
    }

    @GetMapping("/popular")
    public ResponseEntity<PagedResponseDto<ContentSummaryDto>> getPopular(
            @RequestParam(required = false) String pageToken) {
        return ResponseEntity.ok(seriesService.getPopular(pageToken));
    }

    @GetMapping("/top-rated")
    public ResponseEntity<PagedResponseDto<ContentSummaryDto>> getTopRated(
            @RequestParam(required = false) String pageToken) {
        return ResponseEntity.ok(seriesService.getTopRated(pageToken));
    }

    @GetMapping("/trending")
    public ResponseEntity<PagedResponseDto<ContentSummaryDto>> getTrending(
            @RequestParam(required = false) String pageToken) {
        return ResponseEntity.ok(seriesService.getTrending(pageToken));
    }
}
