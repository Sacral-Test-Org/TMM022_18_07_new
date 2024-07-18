import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GroupIDService } from 'src/app/services/group-id.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-group-id',
  templateUrl: './group-id.component.html',
  styleUrls: ['./group-id.component.css']
})
export class GroupIDComponent {
  globalParameter: number = 0; // This should be set based on your application's logic
  hdr: any = {}; // This should be replaced with actual HDR block data

  constructor(private groupIDService: GroupIDService, private router: Router, private logger: NGXLogger) {}

  handleDoubleClick() {
    if (this.globalParameter === 0) {
      this.groupIDService.fetchGroupLOV(this.hdr.UNIT_ID).subscribe(lovData => {
        // Display GROUP_LOV
        this.logger.info('Displaying GROUP_LOV', lovData);
        this.navigateToLineID();
      });
    } else if (this.globalParameter === 1) {
      this.groupIDService.fetchEditGroupLOV(this.hdr.UNIT_ID).subscribe(lovData => {
        // Display EDIT_GROUP_LOV
        this.logger.info('Displaying EDIT_GROUP_LOV', lovData);
        this.navigateToLineID();
      });
    }
  }

  handleClick() {
    this.disableSaveButton();
    this.clearFields();
    this.navigateToGroupID();
  }

  validateGroupID() {
    if (this.globalParameter === 0) {
      this.groupIDService.validateGroupID(this.hdr.UNIT_ID, this.hdr.GROUP_ID, this.hdr.GROUP_NAME).subscribe(isValid => {
        if (!isValid) {
          this.logger.error('Validation failed for GROUP_LOV');
          // Display validation error message
        }
      });
    } else if (this.globalParameter === 1) {
      this.groupIDService.validateEditGroupID(this.hdr.UNIT_ID, this.hdr.GROUP_ID, this.hdr.GROUP_NAME).subscribe(isValid => {
        if (!isValid) {
          this.logger.error('Validation failed for EDIT_GROUP_LOV');
          // Display validation error message
        }
      });
    }
  }

  private disableSaveButton() {
    // Logic to disable the Save button
    this.logger.info('Save button disabled');
  }

  private clearFields() {
    this.hdr.GROUP_ID = '';
    this.hdr.GROUP_NAME = '';
    this.hdr.LINE_ID = '';
    this.hdr.LINE_DESC = '';
    this.hdr.PART_ID = '';
    this.hdr.PARTNO = '';
    this.hdr.PART_DESC = '';
    this.logger.info('Fields cleared');
  }

  private navigateToGroupID() {
    // Logic to navigate back to Group ID field
    this.logger.info('Navigated back to Group ID field');
  }

  private navigateToLineID() {
    // Logic to navigate to Line ID field
    this.router.navigate(['/line-id']);
    this.logger.info('Navigated to Line ID field');
  }
}
