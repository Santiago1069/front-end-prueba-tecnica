import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import {  HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';

import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
