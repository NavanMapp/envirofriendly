package com.enviro.assessment.grad001.navanmaphalala.controller;

import com.enviro.assessment.grad001.navanmaphalala.model.Recycling;
import com.enviro.assessment.grad001.navanmaphalala.service.RecyclingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<String> updateRecyclingRecord(@PathVariable int id,
//                                                        @RequestParam String name,
//                                                        @RequestParam String email,
//                                                        @RequestParam String type,
//                                                        @RequestParam String location,
//                                                        @RequestParam(required = false) String tip,
//                                                        @RequestParam double quantity
                                                        @RequestBody RecyclingRequest request
    ) {
        try{
            boolean record = recyclingService.updateRecycling(
                    request.getId(),
                    request.getName(),
                    request.getEmail(),
                    request.getType(),
                    request.getLocation(),
                    request.tip,
                    request.getQuantity()
            );
            if (record) {
                return ResponseEntity.ok("Record updated successfully.");
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Record not found");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Error "+ e.getMessage());
        }

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteRecyclingRecord(@PathVariable int id) {
        boolean deleted = recyclingService.deleteRecycling(id);
        if (deleted) {
            return ResponseEntity.ok("Record has been deleted successfully");
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/categories/{type}")
    public List<Recycling> getAllRecyclingRecordsCategories(@PathVariable String recyclingType) {
        return recyclingService.getRecyclingType(recyclingType);
    }

    @GetMapping("/price/")
    public double getPriceForType(@RequestParam String type, @RequestParam double price) {
        return recyclingService.getPricePerType(type);
    }

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
