import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ViewalltaskComponent } from './viewalltask/viewalltask.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    ViewalltaskComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'addtask',component:AddtaskComponent},
    { path:'viewalltask',component:ViewalltaskComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
