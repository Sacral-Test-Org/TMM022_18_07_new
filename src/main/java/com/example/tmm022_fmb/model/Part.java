package com.example.tmm022_fmb.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.Table;

@Entity
@Table(name = "HPM_PART_MASTER")
public class Part {

    @Id
    @Column(name = "PART_ID")
    private String partId;

    @Column(name = "UNIT_ID")
    private String unitId;

    @Column(name = "GROUP_ID")
    private String groupId;

    @Column(name = "LINE_ID")
    private String lineId;

    @Column(name = "PARTNO")
    private String partNo;

    @Column(name = "PART_DESC")
    private String partDesc;

    @Column(name = "PART_STATUS")
    private String partStatus;

    // Getters and Setters

    public String getPartId() {
        return partId;
    }

    public void setPartId(String partId) {
        this.partId = partId;
    }

    public String getUnitId() {
        return unitId;
    }

    public void setUnitId(String unitId) {
        this.unitId = unitId;
    }

    public String getGroupId() {
        return groupId;
    }

    public void setGroupId(String groupId) {
        this.groupId = groupId;
    }

    public String getLineId() {
        return lineId;
    }

    public void setLineId(String lineId) {
        this.lineId = lineId;
    }

    public String getPartNo() {
        return partNo;
    }

    public void setPartNo(String partNo) {
        this.partNo = partNo;
    }

    public String getPartDesc() {
        return partDesc;
    }

    public void setPartDesc(String partDesc) {
        this.partDesc = partDesc;
    }

    public String getPartStatus() {
        return partStatus;
    }

    public void setPartStatus(String partStatus) {
        this.partStatus = partStatus;
    }
}
