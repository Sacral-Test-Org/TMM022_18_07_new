import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  systemDate: string;
  screenName: string = 'TMM022';
  screenNameHint: string = 'PRESS <RETURN> TO RUN NEW FORM <F6> TO RUN NEW FORM AND RETURN BACK';

  constructor(private dateService: DateService) {}

  ngOnInit(): void {
    this.systemDate = this.dateService.getCurrentDate();
    this.screenName = this.screenName.toUpperCase();
  }
}
