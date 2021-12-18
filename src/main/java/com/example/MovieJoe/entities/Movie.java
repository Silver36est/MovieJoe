package com.example.MovieJoe.entities;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "movies")
public class Movie {
    @Id
    @GeneratedValue
    private Long id;
    @NotNull(message = "Must provide title")
    private String title;
    private String genre;
    private String releaseYear;
    private String length;
    @Column(columnDefinition = "TEXT")
    private String description;
    private String image;

}
