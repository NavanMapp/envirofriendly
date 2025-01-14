package com.enviro.assessment.grad001.navanmaphalala.model;

import lombok.Data;

@Data
public class Recylcing {

    private Long id;
    private String userName;
    private String email;
    private String type;
    private String location;
    private Integer quantity;
    private Double price;

    public Recylcing(Long id, String userName,
                     String email, String type,
                     String location, Integer quantity,
                     Double price)
    {
        this.id = id;
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
        this.price = Recylcing.this.price;
    }


}
