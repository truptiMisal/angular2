import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule, MdDialog, MdButton } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouteRoutingModule }  from './../app.route';

import 'hammerjs';
import { AppComponent } from './../app.component';
import { UserlistComponent, DialogOverviewExampleDialog } from './userlist.component';
import { UserdetailsComponent } from './userdetails.component';

@NgModule({
  declarations: [
    UserlistComponent,
    UserdetailsComponent,
    DialogOverviewExampleDialog  ],
  imports: [
    RouterModule,
    BrowserModule,
    MaterialModule,
    HttpModule,
    BrowserAnimationsModule,
    RouteRoutingModule

  ],
  //directives: [MdButton],
  entryComponents: [ DialogOverviewExampleDialog ],
  providers: [],
})
export class usersModule { }
