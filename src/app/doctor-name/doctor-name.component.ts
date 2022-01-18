import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-doctor-name',
  templateUrl: './doctor-name.component.html',
  styleUrls: ['./doctor-name.component.css']
})
export class DoctorNameComponent implements OnInit {

  constructor(public api:ApiService) { }

docresponse:any;
doc:any;
dname:any;
  ngOnInit(){
    let response=this.api.getAllDoctors();
    response.subscribe((data:any)=>this.doc=data);
  }

 


 public getDoctorByName(){
   let customrep=this.api.getDoctorByName(this.dname);
   customrep.subscribe((data:any)=>this.docresponse=data);
 }
}
