package com.example.MovieJoe.entities;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotNull(message = "you need to provide a name")
    private String userName;
    @NotNull(message = "you need to provide a password")
    private String password;
    private String role;
    private String firstName;
    private String lastName;
    private String email;
    private String image;


}
