import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { HeaderComponent } from './components/header/header.component';
import { FormInitializationComponent } from './components/form-initialization/form-initialization.component';
import { UnitIdComponent } from './components/unit-id/unit-id.component';
import { GroupIdComponent } from './components/group-id/group-id.component';
import { PartNumberComponent } from './components/part-number/part-number.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ExitConfirmationDialogComponent } from './components/exit-confirmation-dialog/exit-confirmation-dialog.component';
import { FormInitializationService } from './services/form-initialization.service';
import { UnitIdService } from './services/unit-id.service';
import { GroupIdService } from './services/group-id.service';
import { PartService } from './services/part.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormInitializationComponent,
    UnitIdComponent,
    GroupIdComponent,
    PartNumberComponent,
    ButtonsComponent,
    ExitConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    })
  ],
  providers: [
    FormInitializationService,
    UnitIdService,
    GroupIdService,
    PartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
