package Smartsaver.repository;

import Smartsaver.entity.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlightRepository
        extends JpaRepository<Flight,Integer> {

}