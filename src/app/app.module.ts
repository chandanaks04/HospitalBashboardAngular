import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorNameComponent } from './doctor-name/doctor-name.component';
import { PatientIdComponent } from './patient-id/patient-id.component';
import { PatientComponent } from './patient/patient.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    DoctorNameComponent,
    PatientIdComponent,
    PatientComponent,
    HomeComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
