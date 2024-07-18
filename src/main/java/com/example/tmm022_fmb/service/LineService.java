package com.example.tmm022_fmb.service;

import com.example.tmm022_fmb.repository.LineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LineService {

    @Autowired
    private LineRepository lineRepository;

    public List<String> getLineIdList() {
        return lineRepository.getLineIdList();
    }

    public boolean validateLineId(String unitId, String groupId, String lineId, String lineDesc, int globalParam) {
        boolean isValid;
        if (globalParam == 0) {
            isValid = lineRepository.validateLineId(unitId, groupId, lineId, lineDesc);
        } else {
            isValid = lineRepository.validateLineIdForEdit(unitId, groupId, lineId, lineDesc);
        }
        return isValid;
    }
}
