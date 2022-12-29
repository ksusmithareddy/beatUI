import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { SlabChargesComponent } from './slab-charges/slab-charges.component';
import { ViewHeirarchyComponent } from './view-heirarchy/view-heirarchy.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
// const route1:Routes=[
//   {path:'',component : CreateUpdateComponent},
//   {path:'slab',component : SlabChargesComponent},
//   {path:'viewheirachy', component:ViewHeirarchyComponent},
//   {path:'view', component:ViewComponent}
// ]

@NgModule({
  declarations: [
    ViewComponent,
    CreateUpdateComponent
  ],
  bootstrap: [ViewHeirarchyComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers:[],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrganizationModule { }
