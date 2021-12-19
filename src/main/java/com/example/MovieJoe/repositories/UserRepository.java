package com.example.MovieJoe.repositories;

import com.example.MovieJoe.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUserNameAndPassword(String userName, String password);

    boolean existsByUserName(String userName);

    boolean existsByUserNameAndPassword(String userName, String password);

    Optional<User> findByUserName(String userName);
}
