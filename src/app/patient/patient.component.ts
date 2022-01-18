import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { NgForm } from '@angular/forms';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  [x: string]: any;
  doc:any;
  constructor(public api:ApiService) { }

  ngOnInit(): void {
  // this.dropdownRefresh();
  let response=this.api.getAllDoctors();
  response.subscribe((data:any)=>this.doc=data);
  }
  msg!:string;
  docresponse!:string;

 public addpatient(AddPatientFrom: NgForm)
 {
  console.log(AddPatientFrom.value);
   this.api.addPatientDetails(AddPatientFrom.value).
  
    subscribe(
      (data: any) => {
        
        this.msg=data;
        
        alert("Patient Added sucessfully!!");
      },
      (err: any) => {
          console.log(err);
          alert("unable to add Patient Try someother time");
      }
    )
 }

//  public listItems:Array<string>=[];
//  Doctor:Array<string>=[];
  
//  dropdownRefresh()
//  {
//    this.api.getAllDoctors().subscribe((data:any) =>{
//      data.array.forEach((element: any) => {
//        this.listItems.push(element['dname']);
//      });
//    });
//  }
dname:any;


 public getDoctorByName(){
   let customrep=this.api.getDoctorByName(this.dname);
   customrep.subscribe((data:any)=>this.docresponse=data);
 }


}
