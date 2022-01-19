import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../shared/api.service';
import { NgForm } from '@angular/forms';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(public api:ApiService) { }

  ngOnInit(): void {
     
  }
  
  msg!:String;
  formValue!:NgForm;
   addDoctor(registrationForm:NgForm)

  {
    console.log(registrationForm.value);
    this.api.addDoctorDetails(registrationForm.value).
    subscribe(
      (data: any) => {
        
        this.msg=data;
        
        alert("Doctor Added sucessfully!!");
        
      },
      (err: any) => {
          console.log(err);
          alert("unable to add Doctor Try someother time");
      }
    );
  }

}
