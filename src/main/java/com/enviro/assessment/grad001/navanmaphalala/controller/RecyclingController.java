package com.enviro.assessment.grad001.navanmaphalala.controller;

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
        return recyclingService.addRecycling(
                request.getName(),
                request.getEmail(),
                request.getType(),
                request.getLocation(),
                request.getTip(),
                request.getQuantity()
        );
    }

    @GetMapping("/records")
    public List<Recycling> getAllRecyclingRecords() {
        return recyclingService.getAllRecyclings();
    }

    @GetMapping("/records/{type}")
    public List<Recycling> getAllRecyclingRecordsCategories(@PathVariable String recyclingType) {
        return recyclingService.getRecyclingType(recyclingType);
    }

    @GetMapping("/price/")
    public double getPriceForType(@RequestParam String type, @RequestParam double price) {
        return recyclingService.getPricePerType(type);
    }

    public static class RecycleRequest {
        private String name;
        private String email;
        private String type;
        private String location;
        private String tip;
        private double quantity;


        // Getters for user input
        public String getName() { return name; }
        public String getEmail() { return email; }
        public String getType() { return type; }
        public String getLocation() { return location; }
        public String getTip() { return tip; }
        public double getQuantity() { return quantity; }

        // Setters for user input
        public void setName(String name) { this.name = name; }
        public void setEmail(String email) { this.email = email; }
        public void setType(String type) { this.type = type; }
        public void setLocation(String location) { this.location = location; }
        public void setQuantity(double quantity) { this.quantity = quantity; }
    }

}
