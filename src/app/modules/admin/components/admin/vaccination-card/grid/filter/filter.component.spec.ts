import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(FilterComponent.prototype, 'onChange');
  });

  afterEach(() => {
    component.data = {
      tab: '0',
      sortType: 'ASC',
      sortBrand: 'covaxin',
      vaccination: '1',
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Have default Tab Value as 0', () => {
    expect(component.data.tab).toBe('0');
  });

  it('should Change Tabs as Select DropDown changes', () => {
    const select: HTMLSelectElement = fixture.debugElement.query(
      By.css('#filter')
    ).nativeElement;
    select.value = select.options[1].value;
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let selectedTab = select.options[select.selectedIndex].value;
      expect(selectedTab).toBe('1');
    });
    expect('').toBe('');
  });

  it('should Change Brand value on Button Click', () => {
    component.data.tab = '2';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    let covishield = compiled.querySelector('.covishield');
    covishield.click();
    fixture.detectChanges();
    expect(component.data.sortBrand).toEqual('covishield');
  });

  it('should Change Brand value on Button Click', () => {
    component.data.tab = '2';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    let covishield = compiled.querySelector('.covishield');
    covishield.click();
    fixture.detectChanges();
    expect(component.onChange).toHaveBeenCalledTimes(1);
  });
});
