package com.enviro.assessment.grad001.navanmaphalala.controller;

import org.springframework.web.bind.annotation.GetMapping;

public class HomeController {
    @GetMapping("/")
    public String home() {
        return "index.html";
    }
}
