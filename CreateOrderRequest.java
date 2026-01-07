package com.example.ecomm.dto;

import java.util.List;

public class CreateOrderRequest {

    public String name;
    public String phone;
    public String address;
    public String paymentStatus;
    public String orderStatus;
    public double total;
    public List<Item> items;

    public static class Item {
        public String name;
        public double price;
        public int quantity;
    }
}

