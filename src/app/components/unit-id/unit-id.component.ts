import { Component } from '@angular/core';
import { UnitIdService } from 'src/app/services/unit-id.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-unit-id',
  templateUrl: './unit-id.component.html',
  styleUrls: ['./unit-id.component.css']
})
export class UnitIdComponent {
  globalParameter: number;

  constructor(private unitIdService: UnitIdService, private logger: NGXLogger) {}

  handleClick(event: Event): void {
    this.logger.debug('Unit ID field clicked');
    this.unitIdService.handleClick(this.globalParameter).subscribe(response => {
      if (response.success) {
        this.logger.debug('Click handled successfully');
      } else {
        this.logger.error('Error handling click');
      }
    });
  }

  handleDoubleClick(event: Event): void {
    this.logger.debug('Unit ID field double-clicked');
    this.unitIdService.handleDoubleClick(this.globalParameter).subscribe(response => {
      if (response.success) {
        this.logger.debug('Double-click handled successfully');
      } else {
        this.logger.error('Error handling double-click');
      }
    });
  }

  handleValidation(event: Event): void {
    this.logger.debug('Unit ID field validation');
    this.unitIdService.handleValidation(this.globalParameter).subscribe(response => {
      if (response.success) {
        this.logger.debug('Validation handled successfully');
      } else {
        this.logger.error('Error handling validation');
      }
    });
  }
}
