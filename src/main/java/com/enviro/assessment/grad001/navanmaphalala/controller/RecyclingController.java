package com.enviro.assessment.grad001.navanmaphalala.controller;

import com.enviro.assessment.grad001.navanmaphalala.model.Recycling;
import com.enviro.assessment.grad001.navanmaphalala.model.Tips;
import com.enviro.assessment.grad001.navanmaphalala.service.RecyclingService;
import org.springframework.beans.factory.annotation.Autowired;
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

    // Method that adds a user's entry
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
    }

    // Gets and displays all records
    @GetMapping("/records")
    public ResponseEntity<List<Recycling>> getAllRecyclingRecords() {
        List<Recycling> records = recyclingService.getAllRecyclings();
        return ResponseEntity.ok(records);
    }

    // Gets a record using its id
    @GetMapping("/records/{id}")
    public ResponseEntity<Recycling> getRecyclingRecordById(@PathVariable int id) {
        Recycling record = recyclingService.getRecyclingId(id);

        if(record != null) {
            return ResponseEntity.ok(record);
        }
        return ResponseEntity.notFound().build();
    }

    // Filtering method that shows the recycling types selected
    @CrossOrigin
    @GetMapping("/category/{type}")
    public ResponseEntity<List<Recycling>> getByCategory (@PathVariable String type) {
        List<Recycling> record = recyclingService.getRecyclingType(type);
        if(record.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(record);
    }

    // Creates key sets on of the HashMap <String> to display in my frontend
    @GetMapping("/types")
    public Set<String> getType() {
        return recyclingService.getKeyTypes().keySet();
    }

    // Method that updates a specific record using its id.
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
