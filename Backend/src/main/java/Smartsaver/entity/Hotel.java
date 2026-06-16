package Smartsaver.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "hotels")
@Data
public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "hotel_name")
    private String name;

    private String location;

    @Column(name = "price_per_night")
    private Double price;

    private Double rating;

    @Column(name = "image_url")
    private String imageUrl;
}