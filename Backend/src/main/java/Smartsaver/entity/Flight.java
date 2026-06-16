package Smartsaver.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "flights")
@Data
public class Flight {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String airline;

    private String flightNumber;

    private String aircraft;

    private String source;

    private String destination;

    private String departureTime;

    private String arrivalTime;

    private String duration;

    private String stops;

    private String travelDate;

    private Double price;

    private Integer discount;
}