package com.example.tmm022_fmb.service;

import com.example.tmm022_fmb.repository.PartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class PartService {

    @Autowired
    private PartRepository partRepository;

    public String validateAndUpdatePartDescription(String partDescription) {
        // Business logic to validate and update Part Description
        if (partDescription == null || partDescription.isEmpty()) {
            return "Part Description cannot be empty";
        }
        // Assuming partRepository.findByDescription is a method to find part by description
        if (partRepository.findByDescription(partDescription) != null) {
            return "Part Description already exists";
        }
        // Update logic here
        return "Part Description updated successfully";
    }

    public String validateNextItem(Map<String, Object> currentItem) {
        // Business logic to validate the next item
        if (currentItem.get("UNIT_ID") == null || currentItem.get("UNIT_NAME") == null) {
            return "Unit ID and Unit Name should not be null";
        }
        if (currentItem.get("GROUP_ID") == null || currentItem.get("GROUP_NAME") == null) {
            return "Group ID and Group Name should not be null";
        }
        if (currentItem.get("LINE_ID") == null || currentItem.get("LINE_DESC") == null) {
            return "Line ID and Line Name should not be null";
        }
        // Assuming globalParameter is a field in currentItem
        int globalParameter = (int) currentItem.get("globalParameter");
        if (globalParameter == 0) {
            if (currentItem.get("PARTNO") == null) {
                return "Part No and Part Description should not be null";
            }
            // Set PART_STATUS to 'A'
            currentItem.put("PART_STATUS", "A");
        } else if (globalParameter == 1) {
            if (currentItem.get("PART_ID") == null) {
                return "Kindly Choose data from LOV before changing Description";
            }
            if (currentItem.get("PARTNO") == null || currentItem.get("PART_DESC") == null) {
                return "Part No and Part Description should not be null";
            }
            // Set PART_STATUS to 'A'
            currentItem.put("PART_STATUS", "A");
        }
        return "Validation successful";
    }

    public String validatePartStatus(String partStatus) {
        if (partStatus == null || partStatus.isEmpty()) {
            return "PART_STATUS cannot be null";
        }
        return "PART_STATUS is valid";
    }

    public List<String> validateRequiredFields(Map<String, Object> fields) {
        List<String> errorMessages = new ArrayList<>();
        for (Map.Entry<String, Object> entry : fields.entrySet()) {
            if (entry.getValue() == null || entry.getValue().toString().isEmpty()) {
                errorMessages.add(entry.getKey() + " cannot be null");
            }
        }
        return errorMessages;
    }

    public String validateUnitIdAndName(String unitId, String unitName, int globalParameter) {
        if (globalParameter == 0) {
            if (partRepository.findByUnitIdAndUnitName(unitId, unitName) == null) {
                return "Unit ID and Unit Name do not exist in MES_UNIT_MASTER";
            }
        } else if (globalParameter == 1) {
            if (partRepository.findByUnitIdAndUnitNameInBothTables(unitId, unitName) == null) {
                return "Unit ID and Unit Name do not exist in both MES_UNIT_MASTER and HPM_PART_MASTER";
            }
        }
        return "Unit ID and Unit Name are valid";
    }

    public List<String> getLineIdList() {
        return partRepository.getLineIdList();
    }

    public String validateLineId(String lineId, String lineDesc, String unitId, String groupId) {
        if (partRepository.validateLineId(lineId, lineDesc, unitId, groupId) == null) {
            return "Line ID and Line Description do not exist";
        }
        return "Line ID and Line Description are valid";
    }

    public boolean checkPartExists(String unitId, String groupId, String lineId, String partNo) {
        return partRepository.existsByUnitIdAndGroupIdAndLineIdAndPartNo(unitId, groupId, lineId, partNo);
    }

    public String savePart(String unitId, String groupId, String lineId, String partNo, String partDesc, String partStatus) {
        if (checkPartExists(unitId, groupId, lineId, partNo)) {
            return "Part already exists";
        }
        partRepository.save(new Part(unitId, groupId, lineId, partNo, partDesc, partStatus));
        return "Part saved successfully";
    }

    public String updatePart(String unitId, String groupId, String lineId, String partNo, String partDesc, String partStatus, String partId) {
        if (!checkPartExists(unitId, groupId, lineId, partNo)) {
            return "Part does not exist";
        }
        Part part = new Part(unitId, groupId, lineId, partNo, partDesc, partStatus);
        part.setPartId(partId);
        partRepository.save(part);
        return "Part updated successfully";
    }
}