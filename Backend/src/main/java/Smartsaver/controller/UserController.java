package Smartsaver.controller;

import Smartsaver.entity.User;
import Smartsaver.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(
            @RequestBody User user){

        if(user.getName() == null ||
           user.getName().trim().isEmpty()){

            return ResponseEntity
                    .badRequest()
                    .body("Name is required");
        }

        if(user.getPassword() == null ||
           user.getPassword().length() < 8){

            return ResponseEntity
                    .badRequest()
                    .body("Password must contain at least 8 characters");
        }

        User existingUser =
                userRepository.findByEmail(
                        user.getEmail());

        if(existingUser != null){

            return ResponseEntity
                    .badRequest()
                    .body("Email already exists");
        }

        userRepository.save(user);

        return ResponseEntity.ok(
                "Registration Successful");
    }

    @PostMapping("/login")
public ResponseEntity<String> login(
        @RequestBody User user){

    if(user.getEmail() == null ||
       user.getEmail().trim().isEmpty()){

        return ResponseEntity
                .badRequest()
                .body("Email is required");
    }

    if(user.getPassword() == null ||
       user.getPassword().trim().isEmpty()){

        return ResponseEntity
                .badRequest()
                .body("Password is required");
    }

    User dbUser =
            userRepository.findByEmail(
                    user.getEmail());

    if(dbUser == null){

        return ResponseEntity
                .badRequest()
                .body("Email does not exist");
    }

    if(!dbUser.getPassword()
            .equals(user.getPassword())){

        return ResponseEntity
                .badRequest()
                .body("Incorrect password");
    }

    return ResponseEntity.ok(
            "Login Successful");
}
}