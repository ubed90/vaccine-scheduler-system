import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AdminResolveService } from './admin-resolve.service';
import { AdminService } from './admin.service';

describe('AdminResolveService', () => {
  let service: AdminResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdminService],
    });
    service = TestBed.inject(AdminResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
