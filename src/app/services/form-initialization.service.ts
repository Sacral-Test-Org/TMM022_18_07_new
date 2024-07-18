import { Injectable } from '@angular/core';
import { FormModel } from '../models/form.model';
import { UnitIdService } from './unit-id.service';
import { LineIdService } from './line-id.service';
import { GroupIdService } from './group-id.service';

@Injectable({
  providedIn: 'root'
})
export class FormInitializationService {
  constructor(
    private unitIdService: UnitIdService,
    private lineIdService: LineIdService,
    private groupIdService: GroupIdService
  ) {}

  initializeForm(): FormModel {
    const form = new FormModel();
    form.screenName = 'TMM022';
    form.sysDate = new Date().toISOString().split('T')[0];
    form.mode = this.getMode();
    form.cursorStyle = 'default';
    form.saveButtonEnabled = false;
    form.groupIdEnabled = true;
    form.partNoEnabled = true;
    form.partStatusEnabled = true;
    form.partDescEnabled = true;
    form.lineIdEnabled = true;
    form.unitIdEnabled = true;
    form.cursorPosition = 'UNIT_ID';
    return form;
  }

  validateField(fieldName: string, fieldValue: any): string | null {
    if (fieldValue == null) {
      return `${fieldName} should not be null`;
    }
    return null;
  }

  validateAllFields(fields: { [key: string]: any }): string[] {
    const errors: string[] = [];
    for (const field in fields) {
      const error = this.validateField(field, fields[field]);
      if (error) {
        errors.push(error);
      }
    }
    return errors;
  }

  handleUnitIdClick(event: Event, globalParameter: number): void {
    this.unitIdService.handleUnitIdClick(event, globalParameter);
  }

  handleUnitIdDoubleClick(event: Event, globalParameter: number): void {
    this.unitIdService.handleUnitIdDoubleClick(event, globalParameter);
  }

  handleUnitIdValidation(event: Event, globalParameter: number): void {
    this.unitIdService.handleUnitIdValidation(event, globalParameter);
  }

  getLineIdList(): any {
    return this.lineIdService.getLineIdList();
  }

  fetchGroupLOV(globalParameter: number): any {
    return this.groupIdService.fetchGroupLOV(globalParameter);
  }

  fetchEditGroupLOV(globalParameter: number): any {
    return this.groupIdService.fetchEditGroupLOV(globalParameter);
  }

  validateGroupID(groupId: string, groupName: string, globalParameter: number): boolean {
    return this.groupIdService.validateGroupID(groupId, groupName, globalParameter);
  }

  saveData(): void {
    // Implement save logic here
  }

  clearData(): void {
    // Implement clear logic here
  }

  editData(): void {
    // Implement edit logic here
  }

  exitForm(): void {
    // Implement exit logic here
  }

  resetForm(): void {
    // Implement reset logic here
  }
}