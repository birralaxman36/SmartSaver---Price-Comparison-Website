package Smartsaver.controller;

import Smartsaver.entity.Hotel;
import Smartsaver.repository.HotelRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class HotelController {

    private final HotelRepository hotelRepository;

    public HotelController(
            HotelRepository hotelRepository) {

        this.hotelRepository = hotelRepository;
    }

    @GetMapping("/hotels")
    public List<Hotel> getAllHotels() {

        return hotelRepository.findAll();
    }

    @GetMapping("/hotels/{id}")
    public Hotel getHotelById(
        @PathVariable Integer id) {

    return hotelRepository
            .findById(id)
            .orElse(null);
}
}