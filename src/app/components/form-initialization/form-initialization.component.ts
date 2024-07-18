import { Component, OnInit } from '@angular/core';
import { FormInitializationService } from 'src/app/services/form-initialization.service';
import { PartService } from 'src/app/services/part.service';
import { UnitIdService } from 'src/app/services/unit-id.service';
import { LineIdService } from 'src/app/services/line-id.service';
import { GroupIdService } from 'src/app/services/group-id.service';
import { ButtonsService } from 'src/app/services/buttons.service';

@Component({
  selector: 'app-form-initialization',
  templateUrl: './form-initialization.component.html',
  styleUrls: ['./form-initialization.component.css']
})
export class FormInitializationComponent implements OnInit {
  constructor(
    private formInitializationService: FormInitializationService,
    private partService: PartService,
    private unitIdService: UnitIdService,
    private lineIdService: LineIdService,
    private groupIdService: GroupIdService,
    private buttonsService: ButtonsService
  ) {}

  ngOnInit(): void {
    this.formInitializationService.initializeForm();
    this.setCursorToUnitId();
  }

  setCursorToUnitId(): void {
    // Logic to set cursor to UNIT_ID field
  }

  onPartDescriptionClick(): void {
    this.partService.validateAndUpdatePartDescription();
  }

  onNextItem(): void {
    this.partService.validateNextItem();
  }

  validatePartStatus(): void {
    // Logic to validate PART_STATUS field
  }

  validateRequiredFields(): void {
    // Logic to validate required fields
  }

  enableSaveButton(): void {
    // Logic to enable SAVE button
  }

  handleUnitIdClick(event: Event, globalParameter: number): void {
    this.unitIdService.handleUnitIdClick(event, globalParameter);
  }

  handleUnitIdDoubleClick(event: Event, globalParameter: number): void {
    this.unitIdService.handleUnitIdDoubleClick(event, globalParameter);
  }

  handleUnitIdValidation(globalParameter: number): void {
    this.unitIdService.handleUnitIdValidation(globalParameter);
  }

  onLineIdDoubleClick(): void {
    this.lineIdService.getLineIdList();
  }

  onLineIdClick(): void {
    // Logic to handle click event on Line ID field
  }

  validateLineId(): void {
    this.lineIdService.validateLineId();
  }

  handleGroupIDDoubleClick(): void {
    this.groupIdService.fetchGroupLOV();
  }

  handleGroupIDClick(): void {
    // Logic to handle click event on Group ID field
  }

  validateGroupID(): void {
    this.groupIdService.validateGroupID();
  }

  saveData(): void {
    this.buttonsService.saveData();
  }

  clearData(): void {
    this.buttonsService.clearData();
  }

  editData(): void {
    this.buttonsService.editData();
  }

  exitForm(): void {
    this.buttonsService.exitForm();
  }
}
