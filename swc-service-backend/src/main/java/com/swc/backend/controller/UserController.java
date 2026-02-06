package com.swc.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.swc.backend.model.User;
import com.swc.backend.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173/") // React
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // REGISTER
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {

        User savedUser = userService.registerUser(user);
        return ResponseEntity.ok(savedUser);
    }

    // LOGIN
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {

        User loggedUser = userService.loginUser(user.getEmail(), user.getPassword());

        if (loggedUser != null) {
            return ResponseEntity.ok(loggedUser);
        } else {
            return ResponseEntity.badRequest().body("Invalid email or password");
        }
    }
}
