import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PatientService } from './patient.service';

import { PatientsResolveService } from './patients-resolve.service';

describe('PatientsResolveService', () => {
  let service: PatientsResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PatientService],
    });
    service = TestBed.inject(PatientsResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
