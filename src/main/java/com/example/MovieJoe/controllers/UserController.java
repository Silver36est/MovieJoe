package com.example.MovieJoe.controllers;


import com.example.MovieJoe.entities.User;
import com.example.MovieJoe.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api")
@ResponseBody
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user") //add new user
    public User createUser(@Validated @RequestBody User user) {
        return userRepository.save(user);
    }

    @PostMapping("/user/update/{id}") //update user info
    public User updateUser(@PathVariable Long id, User user){
        User userToUpdate = userRepository.findById(id).orElseThrow();
        userToUpdate.setUserName(user.getUserName());
        userToUpdate.setPassword(user.getPassword());
        userRepository.save(user);
        return user;
    }


}
