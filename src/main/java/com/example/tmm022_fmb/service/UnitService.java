package com.example.tmm022_fmb.service;

import com.example.tmm022_fmb.repository.UnitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UnitService {

    @Autowired
    private UnitRepository unitRepository;

    public boolean validateUnitIdAndName(String unitId, String unitName, int globalParameter) {
        if (globalParameter == 0) {
            return unitRepository.findByUnitIdAndUnitName(unitId, unitName).isPresent();
        } else if (globalParameter == 1) {
            return unitRepository.findByUnitIdAndUnitNameInBothTables(unitId, unitName).isPresent();
        }
        return false;
    }
}
