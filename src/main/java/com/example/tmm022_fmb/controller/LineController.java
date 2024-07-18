package com.example.tmm022_fmb.controller;

import com.example.tmm022_fmb.service.LineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/lines")
public class LineController {

    @Autowired
    private LineService lineService;

    @GetMapping("/list")
    public ResponseEntity<List<String>> getLineIdList() {
        List<String> lineIds = lineService.getLineIdList();
        return ResponseEntity.ok(lineIds);
    }

    @GetMapping("/validate")
    public ResponseEntity<String> validateLineId() {
        String validationResult = lineService.validateLineId();
        return ResponseEntity.ok(validationResult);
    }
}
