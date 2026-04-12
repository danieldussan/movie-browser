package io.github.xjesusx0.moviebrowser.users.repositories;

import io.github.xjesusx0.moviebrowser.users.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
}
