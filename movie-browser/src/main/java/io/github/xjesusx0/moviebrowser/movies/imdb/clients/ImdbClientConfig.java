package io.github.xjesusx0.moviebrowser.movies.imdb.clients;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.support.RestClientAdapter;
import org.springframework.web.service.invoker.HttpServiceProxyFactory;

@Configuration
public class ImdbClientConfig {

    @Value("${imdb.api-url}")
    private String apiUrl;

    @Bean
    public RestClient imdbWebClient() {
        return RestClient.builder()
                .baseUrl(apiUrl)
                .build();
    }

    @Bean
    public ImdbClient imdbClient(RestClient restClient) {
        HttpServiceProxyFactory factory =
                HttpServiceProxyFactory.builderFor(
                                RestClientAdapter.create(restClient))
                        .build();

        return factory.createClient(ImdbClient.class);
    }
}
