package io.github.xjesusx0.moviebrowser.movies.controllers;

import io.github.xjesusx0.moviebrowser.movies.dto.ContentSummaryDto;
import io.github.xjesusx0.moviebrowser.movies.services.SearchService;
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
public class SearchController {

    private final SearchService searchService;

    @GetMapping
    public ResponseEntity<List<ContentSummaryDto>> search(@RequestParam String query) {
        return ResponseEntity.ok(searchService.search(query));
    }
}