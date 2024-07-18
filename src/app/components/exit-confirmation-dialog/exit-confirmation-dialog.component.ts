import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-exit-confirmation-dialog',
  templateUrl: './exit-confirmation-dialog.component.html',
  styleUrls: ['./exit-confirmation-dialog.component.css']
})
export class ExitConfirmationDialogComponent {

  constructor(public dialogRef: MatDialogRef<ExitConfirmationDialogComponent>) {}

  open(): void {
    // Logic to open the confirmation dialog
    this.dialogRef.open(ExitConfirmationDialogComponent);
  }

  onYesClick(): void {
    // Logic to close the application without saving any unsaved changes
    window.close();
  }

  onNoClick(): void {
    // Logic to close the confirmation dialog and keep the application open
    this.dialogRef.close();
  }
}
