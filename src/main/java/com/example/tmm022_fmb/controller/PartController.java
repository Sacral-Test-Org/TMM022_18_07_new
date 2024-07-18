package com.example.tmm022_fmb.controller;

import com.example.tmm022_fmb.service.PartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/parts")
public class PartController {

    @Autowired
    private PartService partService;

    @PostMapping("/validateAndUpdatePartDescription")
    public ResponseEntity<String> validateAndUpdatePartDescription(@RequestParam String partDescription) {
        try {
            partService.validateAndUpdatePartDescription(partDescription);
            return new ResponseEntity<>("Part Description updated successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/validateNextItem")
    public ResponseEntity<String> validateNextItem(@RequestParam String currentItem) {
        try {
            partService.validateNextItem(currentItem);
            return new ResponseEntity<>("Next item validated successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/validatePartStatus")
    public ResponseEntity<String> validatePartStatus(@RequestParam String partStatus) {
        try {
            partService.validatePartStatus(partStatus);
            return new ResponseEntity<>("Part Status validated successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/validateRequiredFields")
    public ResponseEntity<String> validateRequiredFields(@RequestBody Map<String, Object> fields) {
        try {
            partService.validateRequiredFields(fields);
            return new ResponseEntity<>("Required fields validated successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/validateUnitIdAndName")
    public ResponseEntity<String> validateUnitIdAndName(@RequestParam String unitId, @RequestParam String unitName, @RequestParam int globalParam) {
        try {
            partService.validateUnitIdAndName(unitId, unitName, globalParam);
            return new ResponseEntity<>("Unit ID and Name validated successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getLineIdList")
    public ResponseEntity<?> getLineIdList() {
        try {
            return new ResponseEntity<>(partService.getLineIdList(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/validateLineId")
    public ResponseEntity<String> validateLineId(@RequestParam String lineId, @RequestParam String lineDesc) {
        try {
            partService.validateLineId(lineId, lineDesc);
            return new ResponseEntity<>("Line ID and Description validated successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/checkPartExists")
    public ResponseEntity<Boolean> checkPartExists(@RequestParam String unitId, @RequestParam String groupId, @RequestParam String lineId, @RequestParam String partNo) {
        try {
            boolean exists = partService.checkPartExists(unitId, groupId, lineId, partNo);
            return new ResponseEntity<>(exists, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/savePart")
    public ResponseEntity<String> savePart(@RequestParam String unitId, @RequestParam String groupId, @RequestParam String lineId, @RequestParam String partNo, @RequestParam String partDesc, @RequestParam String partStatus) {
        try {
            partService.savePart(unitId, groupId, lineId, partNo, partDesc, partStatus);
            return new ResponseEntity<>("Part saved successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/updatePart")
    public ResponseEntity<String> updatePart(@RequestParam String unitId, @RequestParam String groupId, @RequestParam String lineId, @RequestParam String partNo, @RequestParam String partDesc, @RequestParam String partStatus, @RequestParam String partId) {
        try {
            partService.updatePart(unitId, groupId, lineId, partNo, partDesc, partStatus, partId);
            return new ResponseEntity<>("Part updated successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
