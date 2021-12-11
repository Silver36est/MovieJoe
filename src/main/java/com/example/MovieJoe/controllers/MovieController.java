package com.example.MovieJoe.controllers;

import com.example.MovieJoe.entities.Movie;
import com.example.MovieJoe.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@Controller
@RequestMapping("/api")
@ResponseBody
@CrossOrigin("http://localhost:4200")
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;

    @PostMapping("/movie")
    public Movie addMovie (@Validated @RequestBody Movie movie) {
        return movieRepository.save(movie);
    }

    @PostMapping("/movie/update/{id}")
    public Movie updateMovie(@PathVariable Long id, @RequestBody Movie movie) {
        Movie getMovie = movieRepository.findById(id).orElseThrow();
        getMovie.setTitle(movie.getTitle());
        getMovie.setGenre(movie.getGenre());
        getMovie.setReleaseYear(movie.getReleaseYear());
        getMovie.setLength(movie.getLength());
        getMovie.setDescription(movie.getDescription());
        return movieRepository.save(getMovie);
    }

    @DeleteMapping("/movie/delete/{id}")
    public void deleteMovie(@PathVariable Long id) {
        Movie movie = movieRepository.findById(id).orElseThrow();
        movieRepository.delete(movie);
    }

    @GetMapping("/movies")
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @GetMapping("/random")
    public Movie getRandomMovie() throws Exception {
        Random random = new Random();
        List<Movie> movieList = movieRepository.findAll();
        Movie randomMovie = null;

        if (!movieList.isEmpty()) {
            randomMovie = movieList.get(random.nextInt(movieList.size()));
        } else {
            throw new Exception("Movie list is empty.");
        }
        return randomMovie;
    }

    @GetMapping("/movie/{id}")//find by id
    public Movie getMovieById(@PathVariable(value = "id") Long id) {
        return movieRepository.findById(id).orElseThrow();
    }

}
