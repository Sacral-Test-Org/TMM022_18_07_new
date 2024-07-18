package com.example.tmm022_fmb.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {

    @Query("SELECT UNIQUE GROUP_ID, GROUP_NAME FROM MES_GROUP_MASTER WHERE GROUP_STATUS='O' AND GROUP_SECTION=:unitId ORDER BY 1 ASC")
    List<Object[]> fetchGroupLOV(@Param("unitId") String unitId);

    @Query("SELECT UNIQUE B.GROUP_ID, A.GROUP_NAME FROM MES_GROUP_MASTER A, HPM_PART_MASTER B WHERE B.GROUP_ID=A.GROUP_ID AND B.UNIT_ID=:unitId ORDER BY 1 ASC")
    List<Object[]> fetchEditGroupLOV(@Param("unitId") String unitId);

    @Query("SELECT COUNT(*) FROM (SELECT UNIQUE GROUP_ID, GROUP_NAME FROM MES_GROUP_MASTER WHERE GROUP_STATUS='O' AND GROUP_SECTION=:unitId AND GROUP_ID=:groupId AND GROUP_NAME=:groupName)")
    int validateGroupIDForGlobalParam0(@Param("unitId") String unitId, @Param("groupId") String groupId, @Param("groupName") String groupName);

    @Query("SELECT COUNT(*) FROM (SELECT UNIQUE B.GROUP_ID, A.GROUP_NAME FROM MES_GROUP_MASTER A, HPM_PART_MASTER B WHERE B.GROUP_ID=A.GROUP_ID AND B.UNIT_ID=:unitId AND B.GROUP_ID=:groupId AND A.GROUP_NAME=:groupName)")
    int validateGroupIDForGlobalParam1(@Param("unitId") String unitId, @Param("groupId") String groupId, @Param("groupName") String groupName);
}
