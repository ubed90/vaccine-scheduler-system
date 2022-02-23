import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  // tab: string = '0';
  // sortType: string = 'ASC';
  // sortBrand: string = 'covaxin';

  data = {
    tab: '0',
    sortType: 'ASC',
    sortBrand: 'covaxin',
    vaccination: '1',
  };

  @Output() changeEvent = new EventEmitter<{
    tab: string;
    sortType: string;
    sortBrand: string;
    vaccination: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onChange() {
    this.changeEvent.emit(this.data);
  }
}
