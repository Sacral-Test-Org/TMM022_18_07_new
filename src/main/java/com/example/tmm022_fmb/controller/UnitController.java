package com.example.tmm022_fmb.controller;

import com.example.tmm022_fmb.service.UnitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UnitController {

    @Autowired
    private UnitService unitService;

    @GetMapping("/validateUnitIdAndName")
    public ResponseEntity<String> validateUnitIdAndName(@RequestParam String unitId, 
                                                        @RequestParam String unitName, 
                                                        @RequestParam int globalParam) {
        boolean isValid = unitService.validateUnitIdAndName(unitId, unitName, globalParam);
        if (isValid) {
            return ResponseEntity.ok("Validation successful");
        } else {
            return ResponseEntity.badRequest().body("Validation failed");
        }
    }
}
