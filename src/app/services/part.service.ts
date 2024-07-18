import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Part } from '../models/part.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartService {
  private apiUrl = `${environment.apiUrl}/parts`;

  constructor(private http: HttpClient) {}

  validateAndUpdatePartDescription(partDescription: string): Observable<any> {
    const url = `${this.apiUrl}/validateAndUpdatePartDescription`;
    return this.http.post(url, { partDescription });
  }

  validateNextItem(currentItem: any): Observable<any> {
    const url = `${this.apiUrl}/validateNextItem`;
    return this.http.post(url, { currentItem });
  }

  fetchPartNumbers(globalParameter: number, unitId: string, groupId: string, lineId: string): Observable<any> {
    const url = `${this.apiUrl}/fetchPartNumbers`;
    return this.http.post(url, { globalParameter, unitId, groupId, lineId });
  }

  validatePartNumber(partNumber: string, globalParameter: number, unitId: string, groupId: string, lineId: string): Observable<any> {
    const url = `${this.apiUrl}/validatePartNumber`;
    return this.http.post(url, { partNumber, globalParameter, unitId, groupId, lineId });
  }

  checkPartExists(UNIT_ID: string, GROUP_ID: string, LINE_ID: string, PARTNO: string): Observable<any> {
    const url = `${this.apiUrl}/checkPartExists`;
    return this.http.post(url, { UNIT_ID, GROUP_ID, LINE_ID, PARTNO });
  }

  savePart(UNIT_ID: string, GROUP_ID: string, LINE_ID: string, PARTNO: string, PART_DESC: string, PART_STATUS: string): Observable<any> {
    const url = `${this.apiUrl}/savePart`;
    return this.http.post(url, { UNIT_ID, GROUP_ID, LINE_ID, PARTNO, PART_DESC, PART_STATUS });
  }

  updatePart(UNIT_ID: string, GROUP_ID: string, LINE_ID: string, PARTNO: string, PART_DESC: string, PART_STATUS: string, PART_ID: string): Observable<any> {
    const url = `${this.apiUrl}/updatePart`;
    return this.http.post(url, { UNIT_ID, GROUP_ID, LINE_ID, PARTNO, PART_DESC, PART_STATUS, PART_ID });
  }
}
