package com.enviro.assessment.grad001.navanmaphalala.service;

import com.enviro.assessment.grad001.navanmaphalala.model.Recycling;
import com.enviro.assessment.grad001.navanmaphalala.model.Tips;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class RecyclingService {

    /* This class will act as my repository as I am using a H2 database
    ** instead of a query DB setup.
     */

    private final List<Recycling> records = new ArrayList<>();
    private final HashMap<String, Double> recyclePrices = new HashMap<>();
    private final Tips tips;

    /* HashMap to assist with material types being recycled and their prices for calculating
    ** recycle waste per kg a user takes to recycling dump site. Which encourages communities
    *  to recycle more as there is an incentive to doing so.
     */
    public RecyclingService() {
        recyclePrices.put("copper", 2.5);
        recyclePrices.put("glass", 1.7);
        recyclePrices.put("metal", 1.2);
        recyclePrices.put("plastic", 3.0);
        recyclePrices.put("tin", 0.7);

        this.tips = new Tips();
    }

    public HashMap<String, Double> getKeyTypes() {
        return recyclePrices;
    }

    public List<Tips> getTipsList() {
        return new ArrayList<>((Collection) tips);
    }

//    Adds user input of recycling records.
//    the method takes in user entries, calculates and stores is in a string List
//    variable called records.
    public Recycling addRecycling(String name,
                                  String email,
                                  String recycleType,
                                  String location, String randomTip,
                                  double quantity) {

        recycleType = recycleType.toLowerCase();
        if (!recyclePrices.containsKey(recycleType)) {
            throw new IllegalArgumentException("Recycling type " + recycleType + " not supported");
        }

        double pricePerUnit = recyclePrices.get(recycleType);
        double totalPrice = pricePerUnit * quantity;
        randomTip = tips.getRandomTip(recycleType);

        Recycling record = new Recycling(name, email, recycleType, location, randomTip, quantity, totalPrice);
        records.add(record);

        return record;
    }

    // Gets all recycling data from records stored
    public List<Recycling> getAllRecyclings() {
        return new ArrayList<>(records);
    }

    // Service method that filters records using their id
    public Recycling getRecyclingId(int id) {
        return records.stream()
                .filter(records -> records.getId() == id)
                .findFirst()
                .orElse(null);
    }

    // Filters out a single material or type and displays it creating categories for waste produce
    public List<Recycling> getRecyclingType(String recycleType) {
        return records.stream()
                .filter(records -> records.getType().equalsIgnoreCase(recycleType))
                .collect(Collectors.toList());
    }

    // get price of single/specific recycle waste
    public double getPricePerType(String recycleType) {
        recycleType = recycleType.toLowerCase();
        return recyclePrices.getOrDefault(recycleType,0.0);
    }

    // Update an existing record
    public boolean updateRecycling(int id,
                                   String name, String email, String type,
                                   String location, String randomTip, double quantity
    ) {

        Recycling recycling = getRecyclingId(id);
        if (recycling != null) {
            double totalPrice = recyclePrices.get(recycling.getType()) * quantity;
            recycling.setId(id);
            recycling.setName(name);
            recycling.setEmail(email);
            recycling.setType(type);
            recycling.setLocation(location);
            if (randomTip != null) {
                recycling.setTip(randomTip);
            }
            recycling.setQuantity(quantity);
            recycling.setPrice(totalPrice);
            records.add(recycling);
        }
        return false;
    }

    // Deletes a specific record using its id
    public boolean deleteRecycling(int id) {
        return records.removeIf(records -> records.getId() == id);
    }

    // Change or add price for recycling type/material
    public void setRecyclePrices(String recycleType, double price) {
        recyclePrices.put(recycleType.toLowerCase(), price);
    }

}
