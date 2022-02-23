import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalsComponent } from './hospitals.component';

describe('HospitalsComponent', () => {
  let component: HospitalsComponent;
  let fixture: ComponentFixture<HospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HospitalsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should Have Number Of Hospitals as 6', () => {
    const compiled = fixture.nativeElement;
    const noOfHospitals = compiled.querySelectorAll('article');
    expect(noOfHospitals.length).toBe(6);
  });
});
