package com.enviro.assessment.grad001.navanmaphalala.service;

import com.enviro.assessment.grad001.navanmaphalala.model.Recycling;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecyclingService {

    /* This class will act as my repository as I am using a H2 database
    *  instead of a query DB setup.
     */

    private final List<Recycling> records = new ArrayList<>();

    // get price of single waste type recycled
    private double getPricePerType(String recycleType) {
        switch (recycleType.toLowerCase()) {
            case "Copper":
                return 2.5;
            case "Glass":
                return 1.8;
            case "Metal":
                return 3.2;
            case "Steel":
                return 4.0;
            case "Plastic":
                return 0.8;
            default:
                throw new IllegalArgumentException("Invalid recycle type: " + recycleType);
        }

    }

    public Recycling addRecycling(String name, String email, String recycleType, double quantity) {
        double price = getPricePerType(recycleType);
        double totalPrice = quantity * price;

        Recycling record = new Recycling(1L, "navan","navan@email.com", "copper",
                "Newcastle", 20, 5.0);
        records.add(record);
        return record;
    }

    public List<Recycling> getAllRecords() {
        return new ArrayList<>(records);
    }

    public Recycling getRecycling(Long id) {
        return records.stream()
                .filter(record -> record.getId() == id)
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("The record you're looking for is not found: " + id));
    }



}
