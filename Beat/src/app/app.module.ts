import { CUSTOM_ELEMENTS_SCHEMA, NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './employee/profile/profile.component';
import { HistoryComponent } from './employee/history/history.component';
import { DisplayTimesheetComponent } from './employee/display-timesheet/display-timesheet.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HistoryComponent,
    DisplayTimesheetComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: []

})
export class AppModule { }
