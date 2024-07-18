import { Injectable } from '@angular/core';
import { FormInitializationService } from './form-initialization.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitIdService {
  constructor(private formInitializationService: FormInitializationService, private http: HttpClient) {}

  handleClick(event: Event, globalParameter: number): void {
    // Disable Save button if enabled
    this.formInitializationService.disableSaveButton();

    // Clear related fields
    this.formInitializationService.clearField('UNIT_NAME');
    this.formInitializationService.clearField('GROUP_ID');
    this.formInitializationService.clearField('GROUP_NAME');
    this.formInitializationService.clearField('LINE_ID');
    this.formInitializationService.clearField('LINE_DESC');
    this.formInitializationService.clearField('PART_ID');
    this.formInitializationService.clearField('PARTNO');
    this.formInitializationService.clearField('PART_DESC');

    // Set focus back to Unit ID field
    this.formInitializationService.setFocus('UNIT_ID');
  }

  handleDoubleClick(event: Event, globalParameter: number): void {
    if (globalParameter === 0) {
      this.formInitializationService.showLov('UNIT_LOV');
    } else if (globalParameter === 1) {
      this.formInitializationService.showLov('EDIT_UNIT_LOV');
    }

    // Set focus to Group ID field after selection
    this.formInitializationService.setFocus('GROUP_ID');
  }

  handleValidation(event: Event, globalParameter: number): Observable<any> {
    const unitId = this.formInitializationService.getFieldValue('UNIT_ID');
    const unitName = this.formInitializationService.getFieldValue('UNIT_NAME');

    if (globalParameter === 0) {
      return this.http.get(`/api/validate-unit?unitId=${unitId}&unitName=${unitName}`);
    } else if (globalParameter === 1) {
      return this.http.get(`/api/validate-unit-and-part?unitId=${unitId}&unitName=${unitName}`);
    }
  }
}
