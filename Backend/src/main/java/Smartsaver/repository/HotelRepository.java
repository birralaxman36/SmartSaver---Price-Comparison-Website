package Smartsaver.repository;

import Smartsaver.entity.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HotelRepository
        extends JpaRepository<Hotel,Integer> {

}