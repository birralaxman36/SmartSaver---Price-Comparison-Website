package Smartsaver.controller;

import Smartsaver.entity.Product;
import Smartsaver.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/products")
@CrossOrigin(origins = "https://smartsaver-laxman.netlify.app")
@RestController
public class ProductController {

    private final ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/products/{id}")
    public Product getProductById(
            @PathVariable Integer id) {

        return productRepository
                .findById(id)
                .orElse(null);
    }

    @GetMapping("/fashion")
    public List<Product> getFashionProducts() {

    return productRepository
            .findByCategoryId(2);
    }
}