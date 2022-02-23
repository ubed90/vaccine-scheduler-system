import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should Contain ChildComponent Testimonials', () => {
    const childComponent = fixture.debugElement.query(
      By.css('app-testimonials')
    );
    expect(childComponent).toBeTruthy();
  });

  it('should Contain ChildComponent About', () => {
    const childComponent = fixture.debugElement.query(By.css('app-about'));
    expect(childComponent).toBeTruthy();
  });

  it('should Contain ChildComponent Hero', () => {
    const childComponent = fixture.debugElement.query(By.css('app-hero'));
    expect(childComponent).toBeTruthy();
  });

  it('should Contain ChildComponent Hospitals', () => {
    const childComponent = fixture.debugElement.query(By.css('app-hospitals'));
    expect(childComponent).toBeTruthy();
  });
});
