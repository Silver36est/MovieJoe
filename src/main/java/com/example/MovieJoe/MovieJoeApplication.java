package com.example.MovieJoe;

import com.example.MovieJoe.repositories.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
public class MovieJoeApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovieJoeApplication.class, args);
	}

}
