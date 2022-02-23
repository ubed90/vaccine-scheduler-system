import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from 'src/app/model/admin.model';
import { Patient } from 'src/app/model/patient.model';
import { Vaccine } from 'src/app/model/vaccine.model';
import { AdminService } from 'src/app/services/admin.service';
import { PatientService } from 'src/app/services/patient.service';
@Component({
  selector: 'app-add-vaccination',
  templateUrl: './add-vaccination.component.html',
  styleUrls: ['./add-vaccination.component.css'],
})
export class AddVaccinationComponent implements OnInit {
  alertStatus: Boolean = false;
  isVaccinated: Boolean = false;
  isFullyVaccinated: Boolean = false;

  @ViewChild('vaccination') vaccination: ElementRef;
  @ViewChild('doa') doa: ElementRef;
  @ViewChild('brand') brand: ElementRef;
  @ViewChild('givenat') givenAt: ElementRef;

  registerVaccineForm: FormGroup;
  patients: Patient[];
  registeredVaccinations: Admin[];

  selectedPatient: string;
  selectedPatientData: Patient | Admin;
  selectedPatientVaccinations: Vaccine[];

  todays_Date: any;

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private adminService: AdminService
  ) {
    this.registerVaccineForm = this.formBuilder.group({
      email: ['', Validators.required],
      name: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      vaccination: ['', [Validators.required]],
      doadmts: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      givenat: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((response: any) => {
      this.patients = response;
    });

    this.adminService.getRegisteredVaccinations().subscribe((response: any) => {
      this.registeredVaccinations = response;
    });

    this.todays_Date = new Date();
    let day, month, year;
    day = this.todays_Date.getDate();
    month = this.todays_Date.getMonth() + 1;
    year = this.todays_Date.getFullYear();

    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }

    this.todays_Date = year + '-' + month + '-' + day;
  }

  selectPatient() {
    this.isVaccinated = false;
    this.isFullyVaccinated = false;
    this.disableForm(false);
    this.selectedPatient = this.registerVaccineForm.value.email;

    if (this.registeredVaccinations.length > 0) {
      for (let registered of this.registeredVaccinations) {
        if (registered.email === this.selectedPatient) {
          this.selectedPatientData = registered;
          this.selectedPatientVaccinations = registered.vaccination;
          if (registered.vaccination.length > 1) {
            this.isFullyVaccinated = true;
            this.disableForm();
          } else {
            this.isVaccinated = true;
          }
          break;
        }
      }
    }

    if (!this.isVaccinated && !this.isFullyVaccinated) {
      for (let patient of this.patients) {
        if (patient.email === this.selectedPatient) {
          this.selectedPatientData = patient;
          break;
        }
      }
    }

    this.setFormValues(this.selectedPatientData);
  }

  setFormValues(data) {
    this.registerVaccineForm.patchValue({
      dob: data.dob,
      name: data.name,
    });
  }

  disableForm(val: boolean = true) {
    if (val) {
      this.vaccination.nativeElement.disabled = val;
      this.doa.nativeElement.disabled = val;
      this.brand.nativeElement.disabled = val;
      this.givenAt.nativeElement.disabled = val;
    } else {
      this.vaccination.nativeElement.disabled = false;
      this.doa.nativeElement.disabled = false;
      this.brand.nativeElement.disabled = false;
      this.givenAt.nativeElement.disabled = false;
    }
  }

  registervaccine() {
    const { name, email, dob, vaccination, doadmts, brand, givenat } =
      this.registerVaccineForm.value;
    const data: Admin = {
      id: this.selectedPatientData.id,
      name: name,
      email: email,
      dob: dob,
      vaccination: [
        {
          dose: vaccination,
          doa: doadmts,
          brand: brand,
          givenat: givenat,
        },
      ],
    };

    if (this.isVaccinated) {
      this.selectedPatientVaccinations.push(data.vaccination[0]);
      this.adminService
        .registerVaccinationCompletion(
          data.id,
          this.selectedPatientVaccinations
        )
        .subscribe({
          next: (response) => console.log(response),
          error: (err) => {
            throw err;
          },
          complete: () => console.log('[COMPLETED]'),
        });
    } else {
      this.adminService.registerAVaccination(data).subscribe({
        next: (response) => console.log(response),
        error: (err) => {
          throw err;
        },
        complete: () => console.log('[COMPLETED]'),
      });
    }

    this.alertStatus = !this.alertStatus;
  }

  onReset() {
    this.registerVaccineForm.reset();
  }
}
