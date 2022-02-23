import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Admin } from '../model/admin.model';
import { admin_data } from '../model/mock';
import { Vaccine } from '../model/vaccine.model';

import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService;
  let httpClientMock: HttpTestingController;
  let mock_data: Admin[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.get(AdminService);
    httpClientMock = TestBed.get(HttpTestingController);
    mock_data = admin_data;
  });

  afterEach(() => {
    service = undefined;
    httpClientMock = undefined;
    mock_data = undefined;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Regsitered vaccinations from Database via GET', () => {
    service.getRegisteredVaccinations().subscribe((response) => {
      expect(response).toBeTruthy();
    });
    const testRequest = httpClientMock.expectOne('http://localhost:3000/admin');

    expect(testRequest.request.method).toBe('GET');

    testRequest.flush(mock_data);

    httpClientMock.verify();
  });

  it('should return Single Regsitered vaccination from Database via GET and ID passed', () => {
    let data = mock_data[0];
    service.getDetail(data.id).subscribe((response) => {
      expect(response).toBeTruthy();
      // expect(response).toEqual(data);
    });
    const testRequest = httpClientMock.expectOne(
      `http://localhost:3000/admin/${mock_data[0].id}`
    );

    expect(testRequest.request.method).toBe('GET');

    testRequest.flush(mock_data[0]);

    httpClientMock.verify();
  });

  it('should Complete An Existing vaccination In Database VIA POST', () => {
    let newVaccination: Admin = {
      id: '3',
      name: 'Prathamesh Waikar',
      email: 'prathamesh@gmail.com',
      dob: '1998-03-15',
      vaccination: [
        {
          dose: '1',
          doa: '2022-02-10',
          brand: 'sputnik V',
          givenat: 'Pune Hospital',
        },
      ],
    };

    service.registerAVaccination(newVaccination).subscribe((response) => {
      expect(response).toBe(
        newVaccination,
        'Should Return Registered vaccinations'
      );
    });

    const testRequest = httpClientMock.expectOne('http://localhost:3000/admin');

    expect(testRequest.request.method).toBe('POST');
    expect(testRequest.request.body).toEqual(newVaccination);

    // testRequest.flush(mock_data);

    httpClientMock.verify();
  });

  it('should Register New vaccination In Database VIA PATCH', () => {
    let existingData: Admin = admin_data[0];
    let vaccination: Vaccine[] = existingData.vaccination;

    let vaccinationUpdate: Vaccine = {
      dose: '2',
      doa: '2022-02-10',
      brand: 'covishield',
      givenat: 'Pune Hospital',
    };

    vaccination.push(vaccinationUpdate);

    service
      .registerVaccinationCompletion(existingData.id, vaccination)
      .subscribe((response) => {
        expect(response).toBe(
          vaccination,
          'Should Return Registered vaccinations'
        );
      });

    const testRequest = httpClientMock.expectOne(
      `http://localhost:3000/admin/${existingData.id}`
    );

    expect(testRequest.request.method).toBe('PATCH');
    // console.log(testRequest.request.body);
    expect(testRequest.request.body.vaccination).toEqual(vaccination);

    // testRequest.flush(mock_data);

    httpClientMock.verify();
  });
});
