import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayTimesheetComponent } from './employee/display-timesheet/display-timesheet.component';
import { HistoryComponent } from './employee/history/history.component';
import { ProfileComponent } from './employee/profile/profile.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

 
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'profile',component:ProfileComponent},
  {path:'history',component:HistoryComponent},
  {path:'timesheets',component:DisplayTimesheetComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',redirectTo:'/login',pathMatch:'full'}
  




//   {
    
//     path : '',
//     component : AppComponent,
//     children : [
//       {
//         path : '',
//         component : LoginComponent
     
//       }
    
// ]
//   }



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
