import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(HeroComponent.prototype, 'goToHospitals');
  });

  it('should Have Title as "Vaccine Scheduler System"', () => {
    const compiled = fixture.nativeElement;
    let title = compiled.querySelector('h1').textContent;
    expect(title).toBe('Vaccine Scheduler System');
  });

  it('should Go to Partner Component On Button Click', () => {
    const compiled = fixture.nativeElement;
    let title = compiled.querySelector('a');
    title.click();
    expect(component.goToHospitals).toHaveBeenCalledTimes(1);
  });
});
