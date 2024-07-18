import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {
  @Input() globalParameter: number;

  validateField(fieldName: string, fieldValue: any): string | null {
    if (fieldValue === null || fieldValue === undefined || fieldValue === '') {
      switch (fieldName) {
        case 'PART_STATUS':
          return 'PART_STATUS cannot be null. Please fill it out.';
        case 'UNIT_ID':
          return 'UNIT_ID cannot be null. Please fill it out.';
        case 'UNIT_NAME':
          return 'UNIT_NAME cannot be null. Please fill it out.';
        case 'GROUP_ID':
          return 'GROUP_ID cannot be null. Please fill it out.';
        case 'GROUP_NAME':
          return 'GROUP_NAME cannot be null. Please fill it out.';
        case 'LINE_ID':
          return 'LINE_ID cannot be null. Please fill it out.';
        case 'LINE_DESC':
          return 'LINE_DESC cannot be null. Please fill it out.';
        case 'PARTNO':
          return 'PARTNO cannot be null. Please fill it out.';
        case 'PART_ID':
          return 'PART_ID cannot be null. Please choose data from the list of values (LOV).';
        case 'PART_DESC':
          return 'PART_DESC cannot be null. Please fill it out.';
        default:
          return `${fieldName} cannot be null. Please fill it out.`;
      }
    }
    return null;
  }

  validateAllFields(fields: { [key: string]: any }): string[] {
    const errorMessages: string[] = [];

    for (const field in fields) {
      if (fields.hasOwnProperty(field)) {
        const errorMessage = this.validateField(field, fields[field]);
        if (errorMessage) {
          errorMessages.push(errorMessage);
        }
      }
    }

    if (this.globalParameter === 0) {
      if (!fields['PARTNO']) {
        errorMessages.push('PARTNO cannot be null. Please fill it out.');
      }
    } else if (this.globalParameter === 1) {
      if (!fields['PART_ID']) {
        errorMessages.push('PART_ID cannot be null. Please choose data from the list of values (LOV).');
      }
      if (!fields['PARTNO']) {
        errorMessages.push('PARTNO cannot be null. Please fill it out.');
      }
      if (!fields['PART_DESC']) {
        errorMessages.push('PART_DESC cannot be null. Please fill it out.');
      }
    }

    return errorMessages;
  }
}
