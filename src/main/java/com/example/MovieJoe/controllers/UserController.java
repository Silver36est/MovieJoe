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

    @PutMapping("/user/update/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        User foundUser = userRepository.findById(id).orElseThrow();
        foundUser.setUserName(user.getUserName());
        foundUser.setPassword(user.getPassword());
        return userRepository.save(foundUser);
    }


}
