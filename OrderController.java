package com.example.ecomm.controller;

import com.example.ecomm.model.Order;
import com.example.ecomm.repository.OrderRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    private final OrderRepository orderRepository;

    public OrderController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    // ✅ CREATE ORDER (POST)
    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        Order savedOrder = orderRepository.save(order);
        return ResponseEntity.ok(savedOrder);
    }

    // ✅ TEST API (GET)
    @GetMapping("/test")
    public String testOrders() {
        return "Orders API works ✅";
    }
}
