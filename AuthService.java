package com.example.ecomm.service;

import com.example.ecomm.model.User;
import com.example.ecomm.repository.UserRepository;
import com.example.ecomm.dto.RegisterRequest;

import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    private final UserRepository userRepository;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // ===================== LOGIN =====================
    public User login(String email, String password) {

        // تنظيف القيم القادمة من frontend
        email = email.trim().toLowerCase();
        password = password.trim();

        System.out.println("EMAIL FROM REQUEST = [" + email + "]");
        System.out.println("PASSWORD FROM REQUEST = [" + password + "]");

        Optional<User> userOpt = userRepository.findByEmail(email);

        if (userOpt.isPresent()) {
            User user = userOpt.get();

            System.out.println("EMAIL FROM DB = [" + user.getEmail() + "]");
            System.out.println("PASSWORD FROM DB = [" + user.getPassword() + "]");

            if (user.getPassword().equals(password)) {
                System.out.println("LOGIN SUCCESS ✅");
                return user;
            } else {
                System.out.println("PASSWORD DOES NOT MATCH ❌");
            }
        } else {
            System.out.println("USER NOT FOUND IN DB ❌");
        }

        return null;
    }

    // ===================== REGISTER =====================
    public User register(RegisterRequest request) {

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail().trim().toLowerCase());
        user.setPassword(request.getPassword().trim());

        return userRepository.save(user);
    }
}
