import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './employee/profile/profile.component';
import { LoginComponent } from './login/login.component';

 
const routes: Routes = [
  {path:'profile',component:ProfileComponent},
  {
    
    path : '',
    component : AppComponent,
    children : [
      {
        path : '',
        component : LoginComponent
     
      }
    


]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
