import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { RouterModule, Routes } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const PATIENT_ROUTES: Routes = [
  {
    path: '',
    component: AddPatientComponent,
  },
];

@NgModule({
  declarations: [AddPatientComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PATIENT_ROUTES),
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
  ],
  exports: [MatDatepickerModule, MatNativeDateModule, MatFormFieldModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PatientModule {}
