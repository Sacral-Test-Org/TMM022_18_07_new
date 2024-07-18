package com.example.tmm022_fmb.model;

public class Unit {
    private String unitId;
    private String unitName;

    public Unit() {}

    public Unit(String unitId, String unitName) {
        this.unitId = unitId;
        this.unitName = unitName;
    }

    public String getUnitId() {
        return unitId;
    }

    public void setUnitId(String unitId) {
        this.unitId = unitId;
    }

    public String getUnitName() {
        return unitName;
    }

    public void setUnitName(String unitName) {
        this.unitName = unitName;
    }

    @Override
    public String toString() {
        return "Unit{" +
                "unitId='" + unitId + '\'' +
                ", unitName='" + unitName + '\'' +
                '}';
    }
}