package com.ecommerce.backend.service;

import com.ecommerce.backend.model.User;
import com.ecommerce.backend.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class AuthService {

    private final UserRepository repo;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public AuthService(UserRepository repo) {
        this.repo = repo;
    }

    public User register(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        return repo.save(user);
    }

    public User login(String email, String password) {
        User user = repo.findByEmail(email);
        if (user == null || !encoder.matches(password, user.getPassword()))
            return null;
        return user;
    }
}
