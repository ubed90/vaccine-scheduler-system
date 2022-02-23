import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Patient } from '../model/patient.model';

import { PatientService } from './patient.service';
import { patients_data } from 'src/app/model/mock';

describe('PatientService', () => {
  let service: PatientService;
  let httpClientMock: HttpTestingController;

  let patients: Patient[] = patients_data;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.get(PatientService);
    httpClientMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    service = undefined;
    httpClientMock = undefined;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Patient from Database', () => {
    service.getPatients().subscribe((response) => {
      expect(response).toBeTruthy();
    });
    const testRequest = httpClientMock.expectOne(
      'http://localhost:3000/patients'
    );

    expect(testRequest.request.method).toBe('GET');

    testRequest.flush(patients);

    httpClientMock.verify();
  });

  it('should ADD Patient To Database Via POST METHOD', () => {
    let newPatient: Patient = {
      id: '4',
      name: 'Shruti',
      email: 'shruti@gmail.com',
      dob: '1997-08-23',
      gender: 'female',
      pob: 'Mumbai',
      bloodGroup: 'AB-',
      height: '175',
      weight: '76',
    };

    service.addPatient(newPatient).subscribe((response) => {
      expect(response).toEqual(newPatient);
    });

    const testRequest = httpClientMock.expectOne(
      'http://localhost:3000/patients'
    );

    expect(testRequest.request.method).toBe('POST');
    expect(testRequest.request.body).toEqual(newPatient);

    // testRequest.flush(patients);

    httpClientMock.verify();
  });
});
