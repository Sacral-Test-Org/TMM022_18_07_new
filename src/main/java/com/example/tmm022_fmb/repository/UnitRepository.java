package com.example.tmm022_fmb.repository;

import com.example.tmm022_fmb.model.Unit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UnitRepository extends JpaRepository<Unit, Long> {

    @Query("SELECT u FROM Unit u WHERE u.segmentCode = :unitId AND u.segmentName = :unitName")
    Optional<Unit> findByUnitIdAndUnitName(@Param("unitId") String unitId, @Param("unitName") String unitName);

    @Query("SELECT u FROM Unit u, Part p WHERE p.unitId = u.segmentCode AND p.unitId = :unitId AND u.segmentName = :unitName")
    Optional<Unit> findByUnitIdAndUnitNameInBothTables(@Param("unitId") String unitId, @Param("unitName") String unitName);
}
