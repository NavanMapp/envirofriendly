package com.enviro.assessment.grad001.navanmaphalala.service;

import com.enviro.assessment.grad001.navanmaphalala.model.Recylcing;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecyclingService {

    /* This class will act as my repository as I am using a H2 database
    *  instead of a query DB setup.
     */

    private final List<Recylcing> records = new ArrayList<>();

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

    public Recylcing addRecycling(String name, String email, String recycleType, double quantity) {
        double price = getPricePerType(recycleType);
        double totalPrice = quantity * price;

        Recylcing record = new Recylcing(userName, email, type, price, totalPrice);
        records.add(record);
        return record;
    }

    public List<Recycling> getAllRecords() {
//        return new ArrayList<>(records);
        return new ArrayList<>();
    }

    public Recylcing getRecycling(Long id) {
        return records.stream()
                .filter(record -> records)
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("The record you're looking for is not found: " + id));
    }



}
