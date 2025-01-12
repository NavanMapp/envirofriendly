package com.enviro.assessment.grad001.navanmaphalala.model;

import lombok.Data;

import java.util.List;

@Data
public class Waste {

    private Long id;
    private String type;
    private double price;

    public Waste(Long id, String type, double price) {
        this.id = id;
        this.type = type;
        this.price = price;
    }

    //Getters
    public Long getId() {
        return id;
    }
    public double getPrice() {
        return price;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }
    public void setType(String type) { this.type = type; }
    public void setPrice(double price) {
        this.price = Waste.this.price;
    }


}
