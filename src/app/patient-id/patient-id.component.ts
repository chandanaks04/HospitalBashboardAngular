import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-patient-id',
  templateUrl: './patient-id.component.html',
  styleUrls: ['./patient-id.component.css']
})
export class PatientIdComponent implements OnInit {

  constructor(public api:ApiService) { }

  ngOnInit(): void {
  }
  // search()
  // {
  //    this.api.getPatientById(Number).subscribe((err: any)=>{
  //      alert("patient id is not present try with others id ");

  //    })
  // }

}
