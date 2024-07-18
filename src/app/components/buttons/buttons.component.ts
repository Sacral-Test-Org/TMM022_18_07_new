import { Component } from '@angular/core';
import { ButtonsService } from 'src/app/services/buttons.service';
import { FormInitializationService } from 'src/app/services/form-initialization.service';
import { PartService } from 'src/app/services/part.service';
import { MatDialog } from '@angular/material/dialog';
import { ExitConfirmationDialogComponent } from 'src/app/components/exit-confirmation-dialog/exit-confirmation-dialog.component';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  constructor(
    private buttonsService: ButtonsService,
    private formInitializationService: FormInitializationService,
    private partService: PartService,
    public dialog: MatDialog
  ) {}

  saveData() {
    if (this.buttonsService.validateForm()) {
      this.partService.checkPartExists().subscribe(exists => {
        if (exists) {
          if (confirm('Part already exists. Do you want to update it?')) {
            this.partService.updatePart().subscribe(() => {
              alert('Part updated successfully');
              this.formInitializationService.resetForm();
            });
          }
        } else {
          this.partService.savePart().subscribe(() => {
            alert('Part saved successfully');
            this.formInitializationService.resetForm();
          });
        }
      });
    } else {
      alert('Please fill all required fields');
    }
  }

  clearData() {
    this.formInitializationService.resetForm();
    this.formInitializationService.initializeForm();
    this.buttonsService.enableUnitIdField();
    this.buttonsService.setPartStatus('A');
  }

  editData() {
    this.formInitializationService.resetForm();
    this.buttonsService.setPartStatus('A');
    this.buttonsService.setMode('Edit Mode');
    this.buttonsService.disableEditButton();
  }

  exitForm() {
    const dialogRef = this.dialog.open(ExitConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        window.close();
      }
    });
  }
}
