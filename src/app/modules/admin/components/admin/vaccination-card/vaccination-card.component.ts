import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/model/admin.model';

@Component({
  selector: 'app-vaccination-card',
  templateUrl: './vaccination-card.component.html',
  styleUrls: ['./vaccination-card.component.css'],
})
export class VaccinationCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // AddPatientComponent.patients = this.route.snapshot.data['patients'];
    //     console.log(this.route.snapshot.data['patients']);
  }
}
