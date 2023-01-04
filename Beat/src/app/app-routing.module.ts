import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayTimesheetComponent } from './employee/display-timesheet/display-timesheet.component';
import { HistoryComponent } from './employee/history/history.component';
import { ProfileComponent } from './employee/profile/profile.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HeaderComponent } from './Layout/header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SlabChargesComponent } from './organization/slab-charges/slab-charges.component';
import { ViewHeirarchyComponent } from './organization/view-heirarchy/view-heirarchy.component';
import { ViewComponent } from './organization/view/view.component';
import { AddTimesheetComponent } from './employee/add-timesheet/add-timesheet.component';
import { CreateUpdateComponent } from './employee/create-update/create-update.component';
import { CreateOrganizationComponent } from './organization/create-organization/create-organization.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent},
  {
    path: 'profile', component: ProfileComponent, 
  },
  { path: 'profile/history', component: HistoryComponent },
    { path: 'profile/timesheets', component: DisplayTimesheetComponent },
  {
    path: 'viewheirachy',
    component: ViewHeirarchyComponent
  },

  {
    path: 'addtimesheet',
    component: AddTimesheetComponent
  },


  {
    path: 'employee/createupdate',
    component: CreateUpdateComponent
  },
  {
    path: 'slabcharges',
    component: SlabChargesComponent
  },
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: 'createOrganization',
    component: CreateOrganizationComponent
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, HomepageComponent, HeaderComponent, FooterComponent, ViewHeirarchyComponent, SlabChargesComponent, ViewComponent, DisplayTimesheetComponent,ProfileComponent];

