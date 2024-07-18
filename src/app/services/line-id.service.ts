import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class LineIdService {
  private baseUrl = 'api/line';

  constructor(private http: HttpClient, private logger: NGXLogger) {}

  getLineIdList(globalParam: number, unitId: string, groupId: string): Observable<any> {
    const url = `${this.baseUrl}/list/${globalParam}/${unitId}/${groupId}`;
    this.logger.debug('Fetching Line ID list from URL:', url);
    return this.http.get<any>(url).pipe(
      catchError((error) => {
        this.logger.error('Error fetching Line ID list:', error);
        throw error;
      })
    );
  }

  validateLineId(unitId: string, groupId: string, lineId: string, lineDesc: string, globalParam: number): Observable<any> {
    const url = `${this.baseUrl}/validate`;
    const body = { unitId, groupId, lineId, lineDesc, globalParam };
    this.logger.debug('Validating Line ID with body:', body);
    return this.http.post<any>(url, body).pipe(
      catchError((error) => {
        this.logger.error('Error validating Line ID:', error);
        throw error;
      })
    );
  }
}
