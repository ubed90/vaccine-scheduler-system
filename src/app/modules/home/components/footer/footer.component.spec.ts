import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let compiled;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  afterEach(() => {
    compiled = undefined;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain Four Social Media Links', () => {
    let links = compiled.querySelector('.footer-nav').children;
    expect(links.length).toBe(4);
  });

  it('should contain Copyright Heading', () => {
    let links = compiled.querySelector('h2');
    expect(links.textContent).toContain('© ALL RIGHTS RESERVED.');
  });
});
