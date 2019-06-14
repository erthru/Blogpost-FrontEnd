import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminrootComponent } from './adminroot/adminroot.component';
import { AdminpostComponent } from './adminpost/adminpost.component';
import { AdminpostcreateComponent } from './adminpostcreate/adminpostcreate.component';
import { AdminlogoutComponent } from './adminlogout/adminlogout.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { AdminpostshowComponent } from './adminpostshow/adminpostshow.component';
import { AdmindetailComponent } from './admindetail/admindetail.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminrootComponent,
    AdminpostComponent,
    AdminpostcreateComponent,
    AdminlogoutComponent,
    AdminloginComponent,
    AdminregisterComponent,
    AdminpostshowComponent,
    AdmindetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
