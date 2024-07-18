import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class GroupIDService {
  private baseUrl = 'http://localhost:8080/api/groups';

  constructor(private http: HttpClient, private logger: NGXLogger) {}

  fetchGroupLOV(unitId: string): Observable<any> {
    this.logger.debug('Fetching GROUP_LOV for unitId:', unitId);
    return this.http.get(`${this.baseUrl}/group-lov`, { params: { unitId } });
  }

  fetchEditGroupLOV(unitId: string): Observable<any> {
    this.logger.debug('Fetching EDIT_GROUP_LOV for unitId:', unitId);
    return this.http.get(`${this.baseUrl}/edit-group-lov`, { params: { unitId } });
  }

  validateGroupID(unitId: string, groupId: string, groupName: string, globalParam: number): Observable<any> {
    this.logger.debug('Validating Group ID:', groupId, 'Group Name:', groupName, 'for unitId:', unitId, 'with globalParam:', globalParam);
    return this.http.post(`${this.baseUrl}/validate-group-id`, { unitId, groupId, groupName, globalParam });
  }
}
