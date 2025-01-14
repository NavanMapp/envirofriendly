package com.enviro.assessment.grad001.navanmaphalala.service;

import java.util.List;
import lombok.Getter;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {

    public List<String> getCategoryNames() {

        return List.of("Glass", "Steel", "Metal", "Plastic",
            "Organic", "Paper"
        );

    }
}
