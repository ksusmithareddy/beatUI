import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './history/history.component';
import { DisplayTimesheetComponent } from './display-timesheet/display-timesheet.component';
import { UpdateTimesheetComponent } from './update-timesheet/update-timesheet.component';



@NgModule({
  declarations: [
    CreateUpdateComponent,
    AddSkillsComponent,
    ProfileComponent,
    HistoryComponent,
    DisplayTimesheetComponent,
    UpdateTimesheetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
