import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Patient } from 'src/app/model/patient.model';
import { PatientService } from 'src/app/services/patient.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent implements OnInit {
  alertStatus: Boolean = false;

  static patients: Patient[];
  patientForm: FormGroup;
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [
    Validators.required,
    Validators.email,
    AddPatientComponent.uniqueEmail,
  ]);
  dob = new FormControl('', [
    Validators.required,
    AddPatientComponent.olderThan18,
  ]);
  gender = new FormControl('');
  pob = new FormControl('');
  bloodGroup = new FormControl('');
  height = new FormControl('', [Validators.min(10), Validators.max(200)]);
  weight = new FormControl('', [Validators.min(10), Validators.max(500)]);

  constructor(private patientService: PatientService) {
    this.patientForm = new FormGroup({
      name: this.name,
      email: this.email,
      dob: this.dob,
      gender: this.gender,
      pob: this.pob,
      bloodGroup: this.bloodGroup,
      height: this.height,
      weight: this.weight,
    });
  }

  static uniqueEmail(control: AbstractControl): any {
    if (control.value && AddPatientComponent.patients.length >= 1) {
      let isUnique: Boolean = true;
      for (let i = 0; i < AddPatientComponent.patients.length; i++) {
        if (AddPatientComponent.patients[i].email === control.value) {
          isUnique = false;
          break;
        }
      }
      return isUnique ? null : { isunique: true };
    }
  }

  static olderThan18(control: AbstractControl) {
    if (control.value) {
      const isEligible =
        new Date().getFullYear() - Number(control.value.split('-')[0]) >= 18;
      return isEligible ? null : { eligibity: true };
    }
  }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((response: any) => {
      AddPatientComponent.patients = response;
    });
  }

  addPatient() {
    const { name, email, dob, gender, pob, bloodGroup, height, weight } =
      this.patientForm.value;

    const patient: Patient = {
      id: v4(),
      name: name,
      email: email,
      dob: dob,
      gender: gender || 'NA',
      pob: pob || 'NA',
      bloodGroup: bloodGroup || 'NA',
      height: height || 'NA',
      weight: weight || 'NA',
    };

    this.patientService.addPatient(patient).subscribe({
      next: (response) => console.log(response),
      error: (err) => {
        throw err;
      },
      complete: () => console.log('[COMPLETED]'),
    });

    this.alertStatus = !this.alertStatus;

    // this.router.navigate(['/home']);
  }

  onReset() {
    this.patientForm.reset();
  }

  // onReset() {
  //   this.patientService.getPatients().subscribe((response) => {
  //     this.patient = response;
  //   });
  //   console.log(this.patient);

  // this.patientService.getPatients().subscribe({
  //   next: (response) => (this.patients = response),
  //   error: (err) => {
  //     throw err;
  //   },
  //   complete: () => console.log(this.patients),
  // });
  // console.log(this.route.snapshot.data['patients']);
  // }
}
