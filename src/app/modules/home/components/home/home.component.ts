import { Component, ElementRef, OnInit } from '@angular/core';
import { HospitalsComponent } from './hospitals/hospitals.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  scrollToHospitals() {
    document.querySelector('#partner').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
