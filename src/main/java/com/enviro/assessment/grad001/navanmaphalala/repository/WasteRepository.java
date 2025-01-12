package com.enviro.assessment.grad001.navanmaphalala.repository;

import com.enviro.assessment.grad001.navanmaphalala.model.Waste;

import java.util.Optional;

public interface WasteRepository extends JpaRepository<Waste, Long> {
    Optional<Waste> findByType(String type);
}
