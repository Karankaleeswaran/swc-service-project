package com.swc.backend.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.swc.backend.model.User;
import com.swc.backend.repository.UserRepository;

@Service
public class UserServiceImp implements UserService {

    private final UserRepository userRepository;

    public UserServiceImp(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User registerUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User loginUser(String email, String password) {

        Optional<User> userOpt = userRepository.findByEmail(email);

        if (userOpt.isPresent()) {
            User user = userOpt.get();

            if (user.getPassword().equals(password)) {
                return user;
            }
        }

        return null;
    }
}
