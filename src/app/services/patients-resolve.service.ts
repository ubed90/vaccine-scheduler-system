import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { PatientService } from './patient.service';

@Injectable({
  providedIn: 'root',
})
export class PatientsResolveService implements Resolve<any> {
  constructor(private patientService: PatientService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.patientService.getPatients();
  }
}
