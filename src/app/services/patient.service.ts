import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Patient } from '../model/patient.model';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  // patients: Patient[];
  baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = environment.JSONServerURL;
  }

  checkIfPresent(name: string): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseURL}/patients?name=${name}`);
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseURL}/patients`);
  }

  addPatient(patient: Patient): Observable<any> {
    return this.http
      .post(`${this.baseURL}/patients`, patient)
      .pipe(delay(5000));
  }
}
