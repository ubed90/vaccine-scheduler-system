import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/model/admin.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  registeredVaccinations: Admin[];
  sortType: {
    tab: string;
    sortType: string;
    sortBrand: string;
    vaccination: string;
  } = { tab: '', sortType: '', sortBrand: '', vaccination: '' };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.registeredVaccinations =
      this.route.snapshot.data['registeredVaccinations'];
  }

  sort($event) {
    this.sortType = $event;
  }
}
