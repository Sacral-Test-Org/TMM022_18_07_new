package com.example.tmm022_fmb.repository;

import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class LineRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Line> getLineIdList(int globalParam, String unitId, String groupId) {
        String query;
        if (globalParam == 0) {
            query = "SELECT UNIQUE LINE_ID, LINE_DESC FROM HPM_LINE_MASTER WHERE UNIT_ID = ? AND GROUP_ID = ? ORDER BY 1 ASC";
        } else {
            query = "SELECT UNIQUE B.LINE_ID, A.LINE_DESC FROM HPM_LINE_MASTER A, HPM_PART_MASTER B WHERE A.LINE_ID = B.LINE_ID AND B.UNIT_ID = ? AND B.GROUP_ID = ? ORDER BY 1 ASC";
        }
        return jdbcTemplate.query(query, new Object[]{unitId, groupId}, new LineRowMapper());
    }

    public boolean validateLineId(int globalParam, String unitId, String groupId, String lineId, String lineDesc) {
        String query;
        if (globalParam == 0) {
            query = "SELECT UNIQUE LINE_ID, LINE_DESC FROM HPM_LINE_MASTER WHERE UNIT_ID = ? AND GROUP_ID = ? AND LINE_ID = ? AND LINE_DESC = ?";
        } else {
            query = "SELECT UNIQUE B.LINE_ID, A.LINE_DESC FROM HPM_LINE_MASTER A, HPM_PART_MASTER B WHERE A.LINE_ID = B.LINE_ID AND B.UNIT_ID = ? AND B.GROUP_ID = ? AND B.LINE_ID = ? AND A.LINE_DESC = ?";
        }
        List<Line> lines = jdbcTemplate.query(query, new Object[]{unitId, groupId, lineId, lineDesc}, new LineRowMapper());
        return !lines.isEmpty();
    }

    private static class LineRowMapper implements RowMapper<Line> {
        @Override
        public Line mapRow(ResultSet rs, int rowNum) throws SQLException {
            Line line = new Line();
            line.setLineId(rs.getString("LINE_ID"));
            line.setLineDesc(rs.getString("LINE_DESC"));
            return line;
        }
    }
}

class Line {
    private String lineId;
    private String lineDesc;

    public String getLineId() {
        return lineId;
    }

    public void setLineId(String lineId) {
        this.lineId = lineId;
    }

    public String getLineDesc() {
        return lineDesc;
    }

    public void setLineDesc(String lineDesc) {
        this.lineDesc = lineDesc;
    }
}
