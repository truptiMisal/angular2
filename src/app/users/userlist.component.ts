import { Component, OnInit, Injectable, Input, Directive} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {MdDialog} from '@angular/material';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html'
})

export class UserlistComponent implements OnInit {

  
  constructor(public dialog: MdDialog) {}

   openDialog(user) {
    this.dialog.open(DialogOverviewExampleDialog);
  }

  userlist:object = [{
     "id":1,
     "firstname":"gob",
   "lastname":"bluch",
   "address":"Delhi",
   "Designation":"Software Developer"
   },
   {
      "id":2,
     "firstname":"John",
   "lastname":"Doe",
   "address":"Mumbai",
   "Designation":"Software Engineer"
   },
   {
      "id":3,
     "firstname":"eve",
   "lastname":"Holt",
   "address":"Nasik",
   "Designation":"Software Engineer"
   },
   {
      "id":4,
     "firstname":"tracey",
   "lastname":"Holt",
   "address":"Mumbai",
   "Designation":"Software Engineer"
   }
   ]

  ngOnInit() {
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html'
})
export class DialogOverviewExampleDialog implements OnInit {
  /*constructor(private user:object){
    this.user = this.user;
  }*/
  ngOnInit() {

  }
  /*@Input() userlist:string;*/
  /*@input('user') userlist:object;*/
}
