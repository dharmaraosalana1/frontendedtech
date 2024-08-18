import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicModule } from './public.module';



const routes: Routes = [
 
    {path:'admin',loadChildren:()=>import ('../admin/admin.module').then(m=>m.AdminModule)},
    {path:'user',loadChildren:()=>import ('../user/user.module').then(m=>m.UserModule)},
    {path: '', loadChildren :()=>PublicModule}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
