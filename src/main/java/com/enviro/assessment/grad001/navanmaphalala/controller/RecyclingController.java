package com.enviro.assessment.grad001.navanmaphalala.controller;

import com.enviro.assessment.grad001.navanmaphalala.model.Recycling;
import com.enviro.assessment.grad001.navanmaphalala.service.RecyclingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/recycling")
public class RecyclingController {

    private final RecyclingService recyclingService;

    @Autowired
    public RecyclingController(RecyclingService recyclingService) {
        this.recyclingService = recyclingService;
    }

    @PostMapping("/add")
    public Recycling addRecyclingRecord( @RequestBody RecyclingRequest request) {
        return recyclingService.addRecycling(
                request.getName(),
                request.getEmail(),
                request.getType(),
                request.getLocation(),
                request.tip,
                request.getQuantity()
        );
    };

    @GetMapping("/records")
    public ResponseEntity<List<Recycling>> getAllRecyclingRecords() {
        List<Recycling> records = recyclingService.getAllRecyclings();
        return ResponseEntity.ok(records);
    }

    @GetMapping("/records/{id}")
    public ResponseEntity<Recycling> getRecyclingRecordById(@PathVariable int id) {
        Recycling record = recyclingService.getRecyclingId(id);

        if(record != null) {
            return ResponseEntity.ok(record);
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateRecyclingRecord(@PathVariable("id") int id,
                                                        @RequestBody RecyclingRequest request
    ) {
        try{
            recyclingService.updateRecycling(
                    id,
                    request.getName(),
                    request.getEmail(),
                    request.getType(),
                    request.getLocation(),
                    request.tip,
                    request.getQuantity()
                    );
            return ResponseEntity.ok("Record updated successfully.");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Error "+ e.getMessage());
        }

    }

    // Method that Deletes a single entry, using the id
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteRecyclingRecord(@PathVariable int id) {
        boolean deleted = recyclingService.deleteRecycling(id);
        if (deleted) {
            return ResponseEntity.ok("Record has been deleted successfully");
        }
        return ResponseEntity.notFound().build();
    }

    // Filtering method that shows all the recycling types
    @GetMapping("/categories/{type}")
    public List<Recycling> getAllRecyclingRecordsCategories(@PathVariable String recyclingType) {
        return recyclingService.getRecyclingType(recyclingType);
    }

    // Creates key sets on of the HashMap <String> to display in my frontend
    @GetMapping("/types")
    public Set<String> getType() {
        return recyclingService.getKeyTypes().keySet();
    }

    // filters the price of waste produce added by user.
    @GetMapping("/price/")
    public double getPriceForType(@RequestParam String type, @RequestParam double price) {
        return recyclingService.getPricePerType(type);
    }

    // works as my Data Transfer Object
    public static class RecyclingRequest {
        private int id;
        private String name;
        private String email;
        private String type;
        private String location;
        private String tip;
        double quantity;

        public int getId() { return id; }
        public String getName() { return name; }
        public String getEmail() { return email; }
        public String getType() { return type; }
        public String getLocation() { return location; }
        public double getQuantity() { return quantity; }
    }
}
