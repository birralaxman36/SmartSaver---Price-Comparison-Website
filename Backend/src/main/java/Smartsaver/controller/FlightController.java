package Smartsaver.controller;

import Smartsaver.entity.Flight;
import Smartsaver.repository.FlightRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class FlightController {

    private final FlightRepository flightRepository;

    public FlightController(
            FlightRepository flightRepository) {

        this.flightRepository = flightRepository;
    }

    @GetMapping("/flights")
    public List<Flight> getAllFlights() {

        return flightRepository.findAll();
    }

    @GetMapping("/flights/{id}")
    public Flight getFlightById(
            @PathVariable Integer id) {

        return flightRepository
                .findById(id)
                .orElse(null);
    }
}