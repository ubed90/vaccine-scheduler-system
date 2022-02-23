import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/model/admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
})
export class DetailViewComponent implements OnInit {
  registeredId: string;
  isFullyVaccinated: boolean;
  vaccinatedPatient: Admin;

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.registeredId = this.route.snapshot.params['id'];

    this.adminService
      .getDetail(this.registeredId)
      .subscribe((response: any) => {
        this.vaccinatedPatient = response;

        this.isFullyVaccinated = this.vaccinatedPatient.vaccination.length > 1;
      });

    // this.vaccinatedPatient = this.route.snapshot.data['vaccinatedPatient'];
    // console.log(this.vaccinatedPatient);
    // this.isFullyVaccinated = this.vaccinatedPatient.vaccination.length > 1;
  }
}
