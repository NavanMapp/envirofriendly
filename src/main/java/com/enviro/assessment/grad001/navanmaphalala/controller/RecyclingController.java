package com.enviro.assessment.grad001.navanmaphalala.controller;

import com.enviro.assessment.grad001.navanmaphalala.model.User;
import com.enviro.assessment.grad001.navanmaphalala.model.Recycling;
import com.enviro.assessment.grad001.navanmaphalala.service.RecyclingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recycling")
public class RecyclingController {

    private final RecyclingService recyclingService;

    @Autowired
    public RecyclingController(RecyclingService recyclingService) {
        this.recyclingService = recyclingService;
    }

    @PostMapping("/add")
    public Recycling addRecyclingRecord(@RequestBody RecycleRequest request){
        return recyclingService.addRecord(
                request.getName(),
                request.getEmail(),
                request.getType(),
                request.getQuantity(),
                request.getLocation()
        );
    }

    @GetMapping
    public List<Recycling> getAllRecyclingRecords() {
        return null;
    }

    public static class RecycleRequest {
        private String name;
        private String email;
        private String type;
        private double quantity;
        private String location;

        // Getters for user input
        public String getName() { return name; }
        public String getEmail() { return email; }
        public String getType() { return type; }
        public double getQuantity() { return quantity; }
        public String getLocation() { return location; }

        // Setters for user input

        public void setName(String name) { this.name = name; }
        public void setEmail(String email) { this.email = email; }
        public void setType(String type) { this.type = type; }
        public void setQuantity(double quantity) { this.quantity = quantity; }
        public void setLocation(String location) { this.location = location; }
    }

}
