import { Component } from '@angular/core';
import { LineIdService } from '../../services/line-id.service';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-line-id',
  templateUrl: './line-id.component.html',
  styleUrls: ['./line-id.component.css']
})
export class LineIdComponent {
  globalParameter: number = 0; // This should be set based on your application logic
  hdr: any = {}; // This should be populated with actual HDR block data

  constructor(private lineIdService: LineIdService, private router: Router, private logger: NGXLogger) {}

  onLineIdDoubleClick() {
    if (this.globalParameter === 0) {
      this.lineIdService.getLineIdList(this.hdr.UNIT_ID, this.hdr.GROUP_ID).subscribe(
        (data) => {
          // Display LINE_LOV with data
          this.logger.info('Displaying LINE_LOV', data);
        },
        (error) => {
          this.logger.error('Error fetching LINE_LOV', error);
        }
      );
    } else if (this.globalParameter === 1) {
      this.lineIdService.getEditLineIdList(this.hdr.UNIT_ID, this.hdr.GROUP_ID).subscribe(
        (data) => {
          // Display EDIT_LINE_LOV with data
          this.logger.info('Displaying EDIT_LINE_LOV', data);
        },
        (error) => {
          this.logger.error('Error fetching EDIT_LINE_LOV', error);
        }
      );
    }
  }

  onLineIdClick() {
    // Disable Save button
    const saveButton = document.getElementById('saveButton');
    if (saveButton) {
      saveButton.setAttribute('disabled', 'true');
    }

    // Clear fields if not null
    ['LINE_ID', 'LINE_DESC', 'PART_ID', 'PARTNO', 'PART_DESC'].forEach((field) => {
      if (this.hdr[field]) {
        this.hdr[field] = null;
      }
    });

    // Navigate back to Line ID field
    const lineIdField = document.getElementById('lineIdField');
    if (lineIdField) {
      lineIdField.focus();
    }
  }

  onNextItem() {
    const requiredFields = ['UNIT_ID', 'UNIT_NAME', 'GROUP_ID', 'GROUP_NAME', 'LINE_ID', 'LINE_DESC'];
    for (const field of requiredFields) {
      if (!this.hdr[field]) {
        alert(`${field} is required.`);
        const fieldElement = document.getElementById(field.toLowerCase());
        if (fieldElement) {
          fieldElement.focus();
        }
        return;
      }
    }
    // Navigate to Part Number field
    const partNumberField = document.getElementById('partNumberField');
    if (partNumberField) {
      partNumberField.focus();
    }
  }

  validateLineId() {
    this.lineIdService.validateLineId(this.hdr.UNIT_ID, this.hdr.GROUP_ID, this.hdr.LINE_ID, this.hdr.LINE_DESC, this.globalParameter).subscribe(
      (isValid) => {
        if (!isValid) {
          alert('Line ID and Line Description are not valid.');
        }
      },
      (error) => {
        this.logger.error('Error validating Line ID', error);
      }
    );
  }
}
