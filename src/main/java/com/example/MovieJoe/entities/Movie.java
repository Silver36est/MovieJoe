package com.example.MovieJoe.entities;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
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
    private String description;

}
