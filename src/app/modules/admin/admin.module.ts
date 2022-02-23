import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AddVaccinationComponent } from './components/admin/add-vaccination/add-vaccination.component';
import { VaccinationCardComponent } from './components/admin/vaccination-card/vaccination-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { LoginComponent } from './components/admin/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminResolveService } from 'src/app/services/admin-resolve.service';
import { GridComponent } from './components/admin/vaccination-card/grid/grid.component';
import { FilterComponent } from './components/admin/vaccination-card/grid/filter/filter.component';
import { SortPipe } from './pipes/sort.pipe';
import { AdminGuardService } from 'src/app/services/admin-guard.service';

const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'home',
        component: AdminHomeComponent,
        canActivate: [AdminGuardService],
      },
      {
        path: 'register-a-vaccination',
        component: AddVaccinationComponent,
        canActivate: [AdminGuardService],
      },
      {
        path: 'view-registered-vaccinations',
        component: VaccinationCardComponent,
        canActivate: [AdminGuardService],
        children: [
          {
            path: '',
            component: GridComponent,
            resolve: { registeredVaccinations: AdminResolveService },
          },
          {
            path: 'details/:id',
            loadChildren: () =>
              import('../registered-details/registered-details.module').then(
                (m) => m.RegisteredDetailsModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    AddVaccinationComponent,
    VaccinationCardComponent,
    AdminHomeComponent,
    LoginComponent,
    GridComponent,
    FilterComponent,
    SortPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ADMIN_ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class AdminModule {}
