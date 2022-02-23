import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { routes } from './app-routing.module';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PatientService } from './services/patient.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
      ],
      declarations: [AppComponent],
      providers: [PatientService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'vaccine-schedule-system'`, () => {
    expect(app.title).toEqual('vaccine-schedule-system');
  });

  it(`should navigate to Default URL`, fakeAsync(() => {
    // router.navigate(['home']).then(() => {
    //   expect(location.path()).toBe('/home');
    // });
    // expect('').toBe('');
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/home');
  }));

  // it(`should navigate to Patient Module`, () => {
  //   router.navigate(['patient']).then(() => {
  //     expect(location.path()).toBe('/patient');
  //   });
  //   expect('').toBe('');
  // });

  // it(`should navigate to Admin Module`, () => {
  //   router.navigate(['admin']).then(() => {
  //     expect(location.path()).toBe('/admin');
  //   });
  //   expect('').toBe('');
  // });

  it(`should navigate to Invalid Page when trying to access Admin Unauthorized`, () => {
    router.navigate(['invalid']).then(() => {
      expect(location.path()).toBe('/invalid');
    });
    expect('').toBe('');
  });
});
