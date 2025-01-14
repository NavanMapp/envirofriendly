package com.enviro.assessment.grad001.navanmaphalala.model;

public class Recycling {

    private static long idCounter = 1;

    private long id;
    private String userName;
    private String email;
    private String type;
    private String location;
    private int quantity;
    private double price;

    public Recycling(Long id, String userName,
                     String email, String type,
                     String location, Integer quantity,
                     Double price)
    {
        this.id = idCounter++;
        this.userName = userName;
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
    public String getUserName() { return userName; }
    public String getEmail() { return email; }
    public String getType() { return type; }
    public String getLocation() { return location; }
    public Integer getQuantity() { return quantity; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setUserName(String userName) { this.userName = userName; }
    public void setEmail(String email) { this.email = email; }
    public void setLocation(String location) { this.location = location; }
    public void setQuantity(Integer quantity) { this.quantity = quantity; }
    public void setPrice(Double price) { this.price = price; }
    public void setType(String type) { this.type = type; }
    public void setPrice(double price) {
        this.price = Recycling.this.price;
    }


}
