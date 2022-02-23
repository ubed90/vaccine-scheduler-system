import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { HospitalsComponent } from './components/home/hospitals/hospitals.component';
import { TestimonialsComponent } from './components/home/testimonials/testimonials.component';
import { AboutComponent } from './components/home/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { InvalidComponent } from './components/invalid/invalid.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    HeroComponent,
    HospitalsComponent,
    TestimonialsComponent,
    AboutComponent,
    FooterComponent,
    InvalidComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HomeComponent, HeaderComponent, FooterComponent],
})
export class HomeModule {}
