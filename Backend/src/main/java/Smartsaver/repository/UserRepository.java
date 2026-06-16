package Smartsaver.repository;

import Smartsaver.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository
        extends JpaRepository<User,Integer> {

    User findByEmail(String email);

}