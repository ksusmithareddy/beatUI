import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './employee/profile/profile.component';
import { HeaderComponent } from 'layout/header/header.component';
import { FooterComponent } from 'layout/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HistoryComponent } from './employee/history/history.component';
import { DisplayTimesheetComponent } from './employee/display-timesheet/display-timesheet.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ProfileComponent,
  HeaderComponent,
  FooterComponent,
  HomepageComponent,
  HistoryComponent,
  DisplayTimesheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
