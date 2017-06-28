import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '@angular/material';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { }
 
 list:object =[  
   {  
      "firstName":"Trupti",
      "lastName":"Thombare",
      "Designation":"Software Engineer"
   },
   {  
      "firstName":"Girish",
      "lastName":"Desai",
      "Designation":"Software Engineer"
   },
   {  
      "firstName":"Sagar",
      "lastName":"Misal",
      "Designation":"Medical Representative"
   },
   {  
      "firstName":"Shankar",
      "lastName":"Thombare",
      "Designation":"Software Engineer"
   }
];
   name : string ="Trupti";
  ngOnInit() {
  }

}
