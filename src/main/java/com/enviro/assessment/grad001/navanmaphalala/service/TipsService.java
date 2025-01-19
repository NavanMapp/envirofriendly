package com.enviro.assessment.grad001.navanmaphalala.service;

import com.enviro.assessment.grad001.navanmaphalala.model.Tips;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TipsService {

    private final Tips tips = new Tips();

    public TipsService() {}

    public Tips getAllTips() {
        return tips;
    }

    public List<String> getTipsByType(String type) {
        return tips.getTipsByType(type);
    }
}
