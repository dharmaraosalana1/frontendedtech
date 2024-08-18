import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { HeaderComponent } from './shared/header/header.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AdminLayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
