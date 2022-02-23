import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Admin } from 'src/app/model/admin.model';
import { admin_data, patients_data } from 'src/app/model/mock';
import { Patient } from 'src/app/model/patient.model';
import { AdminService } from 'src/app/services/admin.service';
import { PatientService } from 'src/app/services/patient.service';

import { AddVaccinationComponent } from './add-vaccination.component';

describe('AddVaccinationComponent', () => {
  let component: AddVaccinationComponent;
  let fixture: ComponentFixture<AddVaccinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddVaccinationComponent],
      providers: [PatientService, AdminService],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.patients = patients_data;
    component.registeredVaccinations = admin_data;

    // console.log(component.patients);

    spyOn(AddVaccinationComponent.prototype, 'selectPatient');

    fixture.detectChanges();
  });

  afterEach(() => {
    [component.patients, component.registeredVaccinations] = [
      undefined,
      undefined,
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Fire selectPatient method whenever select list is Used', () => {
    const select = fixture.debugElement.query(By.css('#email')).nativeElement;
    select.value = select.options[0].value;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.selectPatient).toHaveBeenCalled();
  });

  it('should select Patient whenever select list is Fired', () => {
    let selectedEmail = patients_data[0].email;
    const select: HTMLSelectElement = fixture.debugElement.query(
      By.css('#email')
    ).nativeElement;
    select.value = select.options[0].value;
    // select.dispatchEvent(new Event('change'));
    component.selectedPatient = select.value;
    fixture.detectChanges();
    // component.selectPatient();
    // fixture.whenStable().then(() => {
    //   let selectedTab = select.options[select.selectedIndex].value;
    //   expect(selectedTab).toBe(selectedEmail);
    // });
    expect(select.value).toBe(selectedEmail);
    // expect(component.isVaccinated).toHaveBeenCalled();
  });

  it('should Set Form Values Patient whenever select list is Fired', () => {
    let selectedPatient = patients_data[0];
    const select: HTMLSelectElement = fixture.debugElement.query(
      By.css('#email')
    ).nativeElement;
    select.value = select.options[0].value;
    component.selectedPatient = select.value;
    component.setFormValues(selectedPatient);
    expect(select.value).toBe(selectedPatient.email);
    expect(component.registerVaccineForm.value.dob).toBe(selectedPatient.dob);
    expect(component.registerVaccineForm.value.name).toBe(selectedPatient.name);
    // expect(component.isVaccinated).toHaveBeenCalled();
  });
});
