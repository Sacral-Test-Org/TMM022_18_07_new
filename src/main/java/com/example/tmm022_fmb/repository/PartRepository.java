package com.example.tmm022_fmb.repository;

import com.example.tmm022_fmb.model.Part;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PartRepository extends JpaRepository<Part, Long> {

    Optional<Part> findByDescription(String description);

    Optional<Part> findById(Long id);

    @Query("SELECT p FROM Part p WHERE p.unitId = :unitId AND p.unitName = :unitName")
    Optional<Part> findByUnitIdAndUnitName(@Param("unitId") String unitId, @Param("unitName") String unitName);

    @Query("SELECT p FROM Part p WHERE p.unitId = :unitId AND p.unitName = :unitName AND EXISTS (SELECT 1 FROM HPM_PART_MASTER h WHERE h.unitId = p.unitId)")
    Optional<Part> findByUnitIdAndUnitNameInBothTables(@Param("unitId") String unitId, @Param("unitName") String unitName);

    @Query("SELECT DISTINCT p.lineId FROM Part p")
    List<String> getLineIdList();

    @Query("SELECT CASE WHEN COUNT(p) > 0 THEN TRUE ELSE FALSE END FROM Part p WHERE p.lineId = :lineId AND p.lineDesc = :lineDesc")
    boolean validateLineId(@Param("lineId") String lineId, @Param("lineDesc") String lineDesc);

    boolean existsByUnitIdAndGroupIdAndLineIdAndPartNo(String unitId, String groupId, String lineId, String partNo);

    Part save(Part part);
}