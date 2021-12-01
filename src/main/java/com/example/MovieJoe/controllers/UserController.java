package com.example.MovieJoe.controllers;


import com.example.MovieJoe.entities.User;
import com.example.MovieJoe.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api")
@ResponseBody
@CrossOrigin("http://localhost:4200")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user") //add new user
    public User createUser(@Validated @RequestBody User user) {
        return userRepository.save(user);
    }

    @PutMapping("/user/update/{id}") //update user info
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        User foundUser = userRepository.findById(id).orElseThrow();
        foundUser.setUserName(user.getUserName());
        foundUser.setPassword(user.getPassword());
        return userRepository.save(foundUser);
    }

    @DeleteMapping("/user/delete/{id}") //delete user
    public void deleteUser(@PathVariable Long id) {
        User user = userRepository.findById(id).orElseThrow();
        userRepository.delete(user);
    }

    @GetMapping("/users") //get list of all users
    public List<User> getListOfUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/user/check")
    public User checkUser(@RequestBody User user) throws Exception {
        User checkedUser = new User();
        if (userRepository.existsByUserNameAndPassword(user.getUserName(), user.getPassword())) {
            userRepository.findByUserNameAndPassword(user.getUserName(), user.getPassword());
        } else {
            throw new Exception("User is not in database");
        }
        return checkedUser;
    }


}
