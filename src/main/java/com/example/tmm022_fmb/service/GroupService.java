package com.example.tmm022_fmb.service;

import com.example.tmm022_fmb.repository.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroupService {

    @Autowired
    private GroupRepository groupRepository;

    public List<Object[]> fetchGroupLOV(String unitId) {
        return groupRepository.fetchGroupLOV(unitId);
    }

    public List<Object[]> fetchEditGroupLOV(String unitId) {
        return groupRepository.fetchEditGroupLOV(unitId);
    }

    public boolean validateGroupID(String unitId, String groupId, String groupName, int globalParam) {
        if (globalParam == 0) {
            return groupRepository.validateGroupIDForParam0(unitId, groupId, groupName) > 0;
        } else if (globalParam == 1) {
            return groupRepository.validateGroupIDForParam1(unitId, groupId, groupName) > 0;
        }
        return false;
    }
}
