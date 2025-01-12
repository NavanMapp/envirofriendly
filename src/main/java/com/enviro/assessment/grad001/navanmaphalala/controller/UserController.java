package com.enviro.assessment.grad001.navanmaphalala.controller;

import com.enviro.assessment.grad001.navanmaphalala.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public class UserController {

    @Autowired
    private User user;

    @PostMapping
    public ResponseEntity<List<User>> getAllUsers(@RequestBody List<User> users) {

        return ResponseEntity.ok(user.);
    }

}
