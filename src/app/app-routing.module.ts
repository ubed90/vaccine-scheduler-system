import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';
import { InvalidComponent } from './modules/home/components/invalid/invalid.component';

export const routes: Routes = [
  {
    path: 'home', // http://localhost:4200/notexist
    component: HomeComponent,
  },
  {
    path: 'patient',
    loadChildren: () =>
      import('./modules/patient/patient.module').then((m) => m.PatientModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'invalid',
    component: InvalidComponent,
  },
  {
    path: '**', // http://localhost:4200/notexist
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
