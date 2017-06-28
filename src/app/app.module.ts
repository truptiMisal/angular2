import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SharebooksModule } from './new-books/sharebooks.module';
import { ServiceComponent } from './service/service.component';
import { RouteRoutingModule }  from './app.route';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { usersModule } from './users/user.module';


import 'hammerjs';
//import { RouteModule } from './route/route.module';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    SharebooksModule,
    HttpModule,
    BrowserAnimationsModule,
    RouteRoutingModule,
    usersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
