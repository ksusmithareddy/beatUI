import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { HistoryComponent } from './history/history.component';
import { DisplayTimesheetComponent } from './display-timesheet/display-timesheet.component';
import { AddTimesheetComponent } from './add-timesheet/add-timesheet.component';




@NgModule({
  declarations: [
    CreateUpdateComponent,
    AddSkillsComponent,
    HistoryComponent,
   AddTimesheetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
