import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Patient } from '../patient';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-patient-id',
  templateUrl: './patient-id.component.html',
  styleUrls: ['./patient-id.component.css']
})
export class PatientIdComponent implements OnInit {
  patients:Patient[]=[];
  pid!:number;
  docresponse:Patient=new Patient();
  docrespons:Doctor=new Doctor();
  dname:any;
  constructor(public api:ApiService) { }

  ngOnInit(): void {
    
  }
  search()
  {
    let customrep= this.api.getPatientById(this.pid).subscribe((data:any)=>{
       this.docresponse=data
        
    }
    // ,
    //  (err:any)=>{
    //    alert("Id is not present try with correct Patient Id");
    //  }
    );
    
  }

}
