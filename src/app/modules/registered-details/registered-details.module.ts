import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const DETAIL_ROUTES: Routes = [
  {
    path: '',
    component: DetailViewComponent,
  },
];

@NgModule({
  declarations: [DetailViewComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(DETAIL_ROUTES),
  ],
})
export class RegisteredDetailsModule {}
