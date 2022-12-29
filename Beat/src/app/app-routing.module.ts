import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from 'layout/footer/footer.component';
import { HeaderComponent } from 'layout/header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { CreateUpdateComponent } from './organization/create-update/create-update.component';
import { SlabChargesComponent } from './organization/slab-charges/slab-charges.component';
import { ViewHeirarchyComponent } from './organization/view-heirarchy/view-heirarchy.component';
import { ViewComponent } from './organization/view/view.component';
const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path: 'getEmployee',
    component : HomepageComponent
  },
  {
    path:'viewheirachy',
    component:ViewHeirarchyComponent
  },
  {
    path:'createupdate',
    component:CreateUpdateComponent
  },
  {
    path:'slabcharges',
    component:SlabChargesComponent
  },
  {
    path:'view',
    component:ViewComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,HomepageComponent,HeaderComponent,FooterComponent,ViewHeirarchyComponent,CreateUpdateComponent,SlabChargesComponent,ViewComponent];