import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouteConfigLoadEnd,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PublicLayoutComponent } from './shared/public-layout.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignupComponent,
    PublicLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
   
  ]
})
export class PublicModule { }
