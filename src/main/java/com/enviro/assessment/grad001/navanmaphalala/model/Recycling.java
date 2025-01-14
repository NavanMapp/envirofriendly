package com.enviro.assessment.grad001.navanmaphalala.model;

public class Recycling {

    private static long idCounter = 1;

    private long id;
    private String name;
    private String email;
    private String type;
    private String location;
    private double quantity;
    private double price;

    public Recycling(String name,
                     String email, String type,
                     String location, double quantity,
                     double price)
    {
        this.id = idCounter++;
        this.name = name;
        this.email = email;
        this.type = type;
        this.location = location;
        this.quantity = quantity;
        this.price = price;
    }

    //Getters
    public double getPrice() {
        return price;
    }
    public Long getId() { return id; }
    public String getName() { return name; }
    public String getEmail() { return email; }
    public String getType() { return type; }
    public String getLocation() { return location; }
    public double getQuantity() { return quantity; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setEmail(String email) { this.email = email; }
    public void setLocation(String location) { this.location = location; }
    public void setQuantity(Integer quantity) { this.quantity = quantity; }
    public void setPrice(Double price) { this.price = price; }
    public void setType(String type) { this.type = type; }
    public void setPrice(double price) {
        this.price = Recycling.this.price;
    }


}
