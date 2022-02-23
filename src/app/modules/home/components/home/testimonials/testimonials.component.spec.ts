import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TestimonialsComponent } from './testimonials.component';

describe('TestimonialsComponent', () => {
  let component: TestimonialsComponent;
  let fixture: ComponentFixture<TestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestimonialsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component.tab = 0;
  });

  it('should Have Tab Selected 1 by Default', () => {
    expect(component.tab).toBe(1);
  });

  it('should Contain 3 Tabs', () => {
    const compiled = fixture.nativeElement;
    const tabs = compiled.querySelectorAll('.indicator-img');
    expect(tabs.length).toBe(3);
  });

  it('should Change Tab Number on Respective Image Selected', () => {
    const compiled = fixture.debugElement;
    const clickEvent = new MouseEvent('click');
    let imgSelected = compiled.query(By.css('.indicator-img:nth-of-type(2)'));
    imgSelected.nativeElement.dispatchEvent(clickEvent);
    // imgSelected.nativeElement.click();
    fixture.detectChanges();
    expect(component.tab).toBe(2);
  });
});
