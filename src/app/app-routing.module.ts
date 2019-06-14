import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminrootComponent } from './adminroot/adminroot.component';
import { AdminpostComponent } from './adminpost/adminpost.component';
import { AdminpostcreateComponent } from './adminpostcreate/adminpostcreate.component';
import { AdminlogoutComponent } from './adminlogout/adminlogout.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { AdminpostshowComponent } from './adminpostshow/adminpostshow.component';
import { AdmindetailComponent } from './admindetail/admindetail.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminrootComponent,
    children:[
      {
        path: 'post',
        component: AdminpostComponent
      },
      {
        path: 'post/create',
        component: AdminpostcreateComponent 
      },
      {
        path: 'post/show/:id',
        component: AdminpostshowComponent 
      },
      {
        path: 'detail',
        component: AdmindetailComponent 
      },
      {
        path: 'logout',
        component: AdminlogoutComponent 
      }
    ]
  },
  {
    path: 'login',
    component: AdminloginComponent
  },
  {
    path: 'register',
    component: AdminregisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
