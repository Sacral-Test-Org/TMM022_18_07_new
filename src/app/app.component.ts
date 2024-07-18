import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'T K A P - [IS]';
  form: FormGroup;

  constructor(private fb: FormBuilder, private globalService: GlobalService) {
    this.form = this.fb.group({
      SCREENNAME: [''],
      SYSDATE: [''],
      MODE: [''],
      UNIT_ID: [{ value: '', disabled: false }],
      UNIT_NAME: [''],
      GROUP_ID: [''],
      GROUP_NAME: [''],
      LINE_ID: [''],
      LINE_DESC: [''],
      PART_ID: [''],
      PARTNO: [''],
      PART_DESC: [''],
      PART_STATUS: [''],
      SAVE: [{ value: '', disabled: true }],
      CLR: [''],
      EDIT: [''],
      EXIT: ['']
    });
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form.patchValue({
      SCREENNAME: 'TMM022',
      SYSDATE: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
      MODE: this.globalService.getMode()
    });

    this.form.controls['GROUP_ID'].enable();
    this.form.controls['PARTNO'].enable();
    this.form.controls['PART_STATUS'].enable();
    this.form.controls['PART_DESC'].enable();
    this.form.controls['LINE_ID'].enable();

    if (this.form.controls['UNIT_ID'].disabled) {
      this.form.controls['UNIT_ID'].enable();
    }

    // Set cursor to UNIT_ID field
    document.getElementById('UNIT_ID')?.focus();
  }
}
