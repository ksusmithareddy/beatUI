import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayTimesheetComponent } from './employee/display-timesheet/display-timesheet.component';
import { HistoryComponent } from './employee/history/history.component';
import { ProfileComponent } from './employee/profile/profile.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HeaderComponent } from './Layout/header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

import { AddTimesheetComponent } from './employee/add-timesheet/add-timesheet.component';
import { CreateUpdateComponent } from './employee/create-update/create-update.component';
import { CreateprojectComponent } from './project/createproject/createproject.component';
import { ViewprojectComponent } from './project/viewproject/viewproject.component';
import { UpdateprojectComponent } from './project/updateproject/updateproject.component';
import { ProjectlistComponent } from './project/projectlist/projectlist.component';
import { CreateOrganizationComponent } from './organization/create-organization/create-organization.component';
import { OrganizationlistComponent } from './organization/organizationlist/organizationlist.component';
import { SlabChargesComponent } from './organization/slab-charges/slab-charges.component';
import { UpdateOrganizationComponent } from './organization/update-organization/update-organization.component';
import { ViewHeirarchyComponent } from './organization/view-heirarchy/view-heirarchy.component';
import { ViewComponent } from './organization/view/view.component';
import { HierarchyOrganizationComponent } from './hierarchy-organization/hierarchy-organization.component';
import { EmpUpdateComponent } from './employee/emp-update/emp-update.component';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent},
  {
    path: 'profile/:id', component: ProfileComponent, 
  },
  { path: 'profile/history', component: HistoryComponent },
    { path: 'profile/timesheets', component: DisplayTimesheetComponent },

  {
    path: 'addtimesheet',
    component: AddTimesheetComponent
  },


  {
    path: 'employee/createupdate',
    component: CreateUpdateComponent
  },
  {
    path: 'employee/update/:id',
    component : EmpUpdateComponent
  },

  {
    path: 'createProject',
    component: CreateprojectComponent
  },
  {
    path: 'update-project/:id',
    component: UpdateprojectComponent
  },
  { path: 'view-project/:id', component: ViewprojectComponent },
  { path: 'projects', component: ProjectlistComponent },

  {
    path: 'slabcharges',
    component: SlabChargesComponent
  },
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path:'view-organization/:id',
    component:ViewHeirarchyComponent
  },
  {
    path:'organizations',
    component:OrganizationlistComponent
  },
  {
    path: 'createOrganization',
    component: CreateOrganizationComponent
  },
  {
    path: 'update-organization/:id',
    component: UpdateOrganizationComponent
  },

   {
    path: 'hierarchy/:id',
    component: HierarchyOrganizationComponent
  },

  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, HomepageComponent, HeaderComponent, FooterComponent, DisplayTimesheetComponent,ProfileComponent];

