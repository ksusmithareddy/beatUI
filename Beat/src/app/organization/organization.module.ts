import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { SlabChargesComponent } from './slab-charges/slab-charges.component';
import { ViewHeirarchyComponent } from './view-heirarchy/view-heirarchy.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
// const route1:Routes=[
//   {path:'',component : CreateUpdateComponent},
//   {path:'slab',component : SlabChargesComponent},
//   {path:'viewheirachy', component:ViewHeirarchyComponent},
//   {path:'view', component:ViewComponent}
// ]

@NgModule({
  declarations: [
    ViewComponent,
    CreateOrganizationComponent,
  ],
  bootstrap: [ViewHeirarchyComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrganizationModule { }
