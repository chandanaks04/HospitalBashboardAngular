import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../doctor';
import { Patient } from '../patient';
import {map} from 'rxjs/operators';

//  import { Observable } from 'rxjs/dist/types/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}
  doctor :Doctor=new Doctor;
  patient:Patient=new Patient;
  API='http://localhost:8181';
   public addDoctorDetails(doctor:Doctor)
    {
    
  
    return this.http.post(this.API+'/hospital/add/doctors',doctor,{responseType:"text"as"json"});
    
    }
    public addPatientDetails(patient:Patient)
    {
      return this.http.post(this.API+'/hospital/add/patients',patient,{responseType:"text"as"json"});
    }

    public getAllDoctors()
    {
      return this.http.get<any>(this.API+'/hospital/get/allDoctors');
    }

    public getDoctorByName(dname:string)
    {
      return this.http.get(this.API+'/hospital/get/doctorsname/'+dname);
    }

    public getPatientById(pid:number)
    {
      return this.http.get(this.API+'/hospital/get/patients/'+pid);
    }
}
