package com.enviro.assessment.grad001.navanmaphalala.model;

public class RecycleTips {
    private Long id;
    private String tip;

    public RecycleTips(Long id, String tip) {
        this.id = id;
        this.tip = tip;
    }

    // Getters
    public Long getId() { return id; }
    public String getTip() { return tip; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setTip(String tip) { this.tip = tip; }

}
