package com.swc.backend.service;

import com.swc.backend.model.User;

public interface UserService {

    User registerUser(User user);

    User loginUser(String email, String password);
}
