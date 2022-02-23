import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit, AfterViewInit {
  current: number = 1;
  backgrounds: Array<string> = [
    "url('../../../../../../assets/images/hero-images/vaccination_1.jpg')",
    "url('../../../../../../assets/images/hero-images/corona.jpg')",
    "url('../../../../../../assets/images/hero-images/injection.jpg')",
    "url('../../../../../../assets/images/hero-images/woman.jpg')",
  ];

  @Output() routeEvent = new EventEmitter();

  @ViewChild('hero') heroElement: ElementRef<any>;

  constructor() {}

  ngAfterViewInit(): void {
    let TIMER = setInterval(() => this.changeBackground(), 4000);
  }

  ngOnInit(): void {}

  goToHospitals() {
    this.routeEvent.emit();
  }

  changeBackground() {
    if (this.current < 4) {
      this.heroElement.nativeElement.style.backgroundImage =
        this.backgrounds[this.current];
      this.current++;
    } else {
      this.current = 0;
    }
  }
}
