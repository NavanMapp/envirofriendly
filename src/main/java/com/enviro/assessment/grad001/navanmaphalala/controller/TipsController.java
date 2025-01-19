package com.enviro.assessment.grad001.navanmaphalala.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.enviro.assessment.grad001.navanmaphalala.model.Tips;
import com.enviro.assessment.grad001.navanmaphalala.service.TipsService;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/tips")
public class TipsController {

    private final TipsService tipsService;

    public TipsController(TipsService tipsService) {
        this.tipsService = tipsService;
    }

    @GetMapping("/{type}")
    public ResponseEntity<?> getTipsByType(@PathVariable String type) {
        List<String> tips = tipsService.getTipsByType(type);

        if (tips.isEmpty() || tips == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(tips, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<Tips> getTipsList() {
        Tips allTips = tipsService.getAllTips();
        return ResponseEntity.ok(allTips);
    }
}
