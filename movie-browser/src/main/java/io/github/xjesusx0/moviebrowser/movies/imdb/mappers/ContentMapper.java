package io.github.xjesusx0.moviebrowser.movies.imdb.mappers;

import io.github.xjesusx0.moviebrowser.movies.dto.*;
import io.github.xjesusx0.moviebrowser.movies.imdb.models.*;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Component
public class ContentMapper {

    public ContentSummaryDto toSummary(ImdbTitle t) {
        return new ContentSummaryDto(
                t.id(),
                t.primaryTitle(),
                t.type(),
                t.startYear(),
                extractImageUrl(t.primaryImage()),
                extractRating(t.rating()),
                t.genres() != null ? t.genres() : Collections.emptyList()
        );
    }

    public MovieDetailDto toMovieDetail(ImdbTitle t) {
        return new MovieDetailDto(
                t.id(),
                t.primaryTitle(),
                t.originalTitle(),
                t.startYear(),
                t.runtimeSeconds() != null ? t.runtimeSeconds() / 60 : null,
                t.plot(),
                extractImageUrl(t.primaryImage()),
                nullSafe(t.genres()),
                mapTexts(t.originCountries(), ImdbCountry::text),
                mapTexts(t.spokenLanguages(), ImdbLanguage::text),
                toRatingDto(t.rating(), t.metacritic()),
                mapPersons(t.directors()),
                mapPersons(t.writers()),
                mapPersons(t.stars())
        );
    }

    public SeriesDetailDto toSeriesDetail(ImdbTitle t, int totalSeasons) {
        return new SeriesDetailDto(
                t.id(),
                t.primaryTitle(),
                t.originalTitle(),
                t.startYear(),
                t.endYear(),
                t.plot(),
                extractImageUrl(t.primaryImage()),
                nullSafe(t.genres()),
                mapTexts(t.originCountries(), ImdbCountry::text),
                mapTexts(t.spokenLanguages(), ImdbLanguage::text),
                toRatingDto(t.rating(), t.metacritic()),
                mapPersons(t.directors()),
                mapPersons(t.stars()),
                totalSeasons
        );
    }

    public SeasonDto toSeason(ImdbSeason s) {
        return new SeasonDto(
                parseIntSafe(s.season()),
                s.episodeCount()
        );
    }

    public EpisodeDto toEpisode(ImdbEpisode e) {
        return new EpisodeDto(
                e.id(),
                e.primaryTitle(),
                e.season(),
                e.episode(),
                e.plot(),
                extractImageUrl(e.primaryImage()),
                e.rating() != null ? e.rating().aggregateRating() : null,
                e.runtimeSeconds() != null ? e.runtimeSeconds() / 60 : null
        );
    }

    // --- helpers ---

    private String extractImageUrl(ImdbImage image) {
        return Optional.ofNullable(image).map(ImdbImage::url).orElse(null);
    }

    private Double extractRating(ImdbRating rating) {
        return Optional.ofNullable(rating).map(ImdbRating::aggregateRating).orElse(null);
    }

    private RatingDto toRatingDto(ImdbRating rating, ImdbMetacritic meta) {
        Double score = Optional.ofNullable(rating).map(ImdbRating::aggregateRating).orElse(null);
        Integer votes = Optional.ofNullable(rating).map(ImdbRating::voteCount).orElse(null);
        Integer metascore = Optional.ofNullable(meta).map(ImdbMetacritic::metascore).orElse(null);
        return new RatingDto(score, votes, metascore);
    }

    private PersonDto toPerson(ImdbName name) {
        return new PersonDto(
                name.id(),
                name.displayName(),
                extractImageUrl(name.primaryImage())
        );
    }

    private List<PersonDto> mapPersons(List<ImdbName> names) {
        if (names == null) return Collections.emptyList();
        return names.stream().map(this::toPerson).toList();
    }

    private <T> List<String> mapTexts(List<T> list, java.util.function.Function<T, String> extractor) {
        if (list == null) return Collections.emptyList();
        return list.stream().map(extractor).toList();
    }

    private <T> List<T> nullSafe(List<T> list) {
        return list != null ? list : Collections.emptyList();
    }

    private Integer parseIntSafe(String value) {
        try {
            return value != null ? Integer.parseInt(value) : null;
        } catch (NumberFormatException e) {
            return null;
        }
    }
}