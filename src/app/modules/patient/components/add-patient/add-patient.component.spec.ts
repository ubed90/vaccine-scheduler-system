import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PatientService } from 'src/app/services/patient.service';

import { AddPatientComponent } from './add-patient.component';
import { patients_data } from 'src/app/model/mock';

describe('AddPatientComponent', () => {
  let component: AddPatientComponent;
  let fixture: ComponentFixture<AddPatientComponent>;

  // let getPatient = undefined;

  // getPatient = jasmine.createSpyObj('PatientServiceMock', ['getPatients']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPatientComponent],
      providers: [PatientService],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // PatientService = TestBed.get(PatientService);
    // httpClientMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    AddPatientComponent.patients = [];
    component.patientForm.patchValue({
      name: '',
      email: '',
      dob: '',
      gender: '',
      pob: '',
      bloodGroup: '',
      height: '',
      weight: '',
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form Should Be Invalid when No value is passed', () => {
    component.patientForm.patchValue({
      name: '',
      email: '',
      dob: '',
      gender: '',
      pob: '',
      bloodGroup: '',
      height: '',
      weight: '',
    });

    expect(component.patientForm.valid).toBeFalse();
  });

  it("Form Should Be Valid when Required value's are passed", () => {
    AddPatientComponent.patients = patients_data;
    component.patientForm.patchValue({
      name: 'karthikeyan',
      email: 'karthik@gmail.com',
      dob: '1995-09-09',
      gender: '',
      pob: '',
      bloodGroup: '',
      height: '',
      weight: '',
    });

    expect(component.patientForm.valid).toBeTrue();
  });

  it('Form Should Be InValid when Existing Email is Used', () => {
    AddPatientComponent.patients = patients_data;
    component.patientForm.patchValue({
      name: 'Ubed',
      email: 'shaikhobaid123@gmail.com',
      dob: '1999-09-09',
      gender: '',
      pob: '',
      bloodGroup: '',
      height: '',
      weight: '',
    });

    expect(component.patientForm.valid).toBeFalse();
  });

  it('Form Should Be InValid when Patient is Less Than 18', () => {
    AddPatientComponent.patients = patients_data;
    component.patientForm.patchValue({
      name: 'new',
      email: 'new@gmail.com',
      dob: '2005-09-09',
      gender: '',
      pob: '',
      bloodGroup: '',
      height: '',
      weight: '',
    });

    expect(component.patientForm.valid).toBeFalse();
  });

  it("Form Should Be InValid when Patient's Height is Less Than 10cm", () => {
    AddPatientComponent.patients = patients_data;
    component.patientForm.patchValue({
      name: 'new',
      email: 'new@gmail.com',
      dob: '1999-09-09',
      gender: '',
      pob: '',
      bloodGroup: '',
      height: '9',
      weight: '',
    });

    expect(component.patientForm.valid).toBeFalse();
  });

  it("Form Should Be InValid when Patient's Weight is Less Than 10kg", () => {
    AddPatientComponent.patients = patients_data;
    component.patientForm.patchValue({
      name: 'new',
      email: 'new@gmail.com',
      dob: '1999-09-09',
      gender: '',
      pob: '',
      bloodGroup: '',
      height: '',
      weight: '9',
    });

    expect(component.patientForm.valid).toBeFalse();
  });
});
