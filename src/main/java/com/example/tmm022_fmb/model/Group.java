package com.example.tmm022_fmb.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.Table;

@Entity
@Table(name = "MES_GROUP_MASTER")
public class Group {

    @Id
    @Column(name = "GROUP_ID")
    private String groupId;

    @Column(name = "GROUP_NAME")
    private String groupName;

    @Column(name = "GROUP_STATUS")
    private String groupStatus;

    @Column(name = "GROUP_SECTION")
    private String groupSection;

    // Getters and Setters

    public String getGroupId() {
        return groupId;
    }

    public void setGroupId(String groupId) {
        this.groupId = groupId;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public String getGroupStatus() {
        return groupStatus;
    }

    public void setGroupStatus(String groupStatus) {
        this.groupStatus = groupStatus;
    }

    public String getGroupSection() {
        return groupSection;
    }

    public void setGroupSection(String groupSection) {
        this.groupSection = groupSection;
    }
}
