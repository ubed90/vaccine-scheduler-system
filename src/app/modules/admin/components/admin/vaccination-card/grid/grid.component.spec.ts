import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SortPipe } from 'src/app/modules/admin/pipes/sort.pipe';

import { GridComponent } from './grid.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridComponent, SortPipe],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Contain Filter Component as its ChildComponent', () => {
    const compiled = fixture.debugElement;
    let filterComponent = compiled.query(By.css('app-filter'));
    expect(filterComponent).toBeTruthy();
  });

  it('should Contain Default SortData as Empty Object', () => {
    let sortData = { tab: '', sortType: '', sortBrand: '', vaccination: '' };
    expect(component.sortType).toEqual(sortData);
  });
});
