package com.enviro.assessment.grad001.navanmaphalala.model;


public class User {
     private Long id;
     private String name;
     private String email;
     private String wasteType;
     private String location;
     private double quantity;

    public User(Long id, String name, String email, String wasteType) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.wasteType = wasteType;
    }

    // Getters
    public Long getId() { return id; }
    public String getName() {
        return name;
    }
    public String getEmail() {
        return email;
    }
    public String getWasteType() { return wasteType;}
    public String getLocation() { return location; }
    public double getQuantity() { return quantity; }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setWasteType(String wasteType) { this.wasteType = wasteType; }
    public void setLocation(String location) {this.location = location; }
    public void setQuantity(double quantity) { this.quantity = quantity; }

}
