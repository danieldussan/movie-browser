package io.github.xjesusx0.moviebrowser.users.dto;

import io.swagger.v3.oas.annotations.media.Schema;

import java.time.LocalDateTime;

@Schema(name = "UserResponse", description = "User data returned by the API")
public record UserResponse(

        @Schema(description = "Unique user identifier", example = "1")
        Integer id,

        @Schema(description = "Unique username", example = "johndoe")
        String username,

        @Schema(description = "User email address", example = "john@example.com")
        String email,

        @Schema(description = "Timestamp when the user was created", example = "2024-01-15T10:30:00")
        LocalDateTime createdAt
) {}
