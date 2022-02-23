import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Admin } from '../model/admin.model';
import { Vaccine } from '../model/vaccine.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseURL: string;
  constructor(private http: HttpClient) {
    this.baseURL = environment.JSONServerURL;
  }

  getRegisteredVaccinations(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.baseURL}/admin`);
  }

  getDetail(id: string): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.baseURL}/admin/${id}`);
  }

  registerAVaccination(data: Admin): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/admin`, data);
  }

  registerVaccinationCompletion(id: string, vaccination: Vaccine[]) {
    return this.http.patch(`${this.baseURL}/admin/${id}`, { vaccination });
  }
}

// editPost(id: string, body: string, published: boolean) {
//   return this.http.patch(`${this.baseURL}/posts/${id}`, { body, published });
// }
