package com.example.tmm022_fmb.controller;

import com.example.tmm022_fmb.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GroupController {

    @Autowired
    private GroupService groupService;

    @GetMapping("/group-lov")
    public ResponseEntity<?> getGroupLOV(@RequestParam String unitId) {
        return ResponseEntity.ok(groupService.fetchGroupLOV(unitId));
    }

    @GetMapping("/edit-group-lov")
    public ResponseEntity<?> getEditGroupLOV(@RequestParam String unitId) {
        return ResponseEntity.ok(groupService.fetchEditGroupLOV(unitId));
    }

    @GetMapping("/validate-group-id")
    public ResponseEntity<?> validateGroupID(@RequestParam String unitId, 
                                             @RequestParam String groupId, 
                                             @RequestParam String groupName, 
                                             @RequestParam int globalParam) {
        boolean isValid = groupService.validateGroupID(unitId, groupId, groupName, globalParam);
        if (isValid) {
            return ResponseEntity.ok("Group ID and Group Name are valid.");
        } else {
            return ResponseEntity.badRequest().body("Invalid Group ID or Group Name.");
        }
    }
}
