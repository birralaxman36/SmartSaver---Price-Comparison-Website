package Smartsaver.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "products")
@Data
public class Product {

    @Id
    private Integer id;

    private String productName;
    private String description;
    private Double price;
    private Double rating;
    private String imageUrl;
    private Integer categoryId;
}