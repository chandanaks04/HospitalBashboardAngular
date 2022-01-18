import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorNameComponent } from './doctor-name/doctor-name.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { PatientIdComponent } from './patient-id/patient-id.component';

const routes: Routes = [
  {path:"doctor",component:DoctorComponent},
  {path:"doctor-name",component:DoctorNameComponent},
  {path:"home",component:HomeComponent},
  {path:"patient",component:PatientComponent },
  {path:"patient-id",component:PatientIdComponent},
  {path:"", redirectTo:"/home",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
