import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let _password: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    service = TestBed.inject(AuthService);
  });

  afterEach(() => {
    _password = '';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should Authenticate SuccessFully on Correct Password', () => {
    _password = 'admin@1234';
    service.onLogin(_password).subscribe((response: any) => {
      expect(response.message).toEqual('SUCCESS');
    });
  });

  it('should revert message "UnsuccessFull" on InCorrect Password', () => {
    _password = 'admin998';
    service.onLogin(_password).subscribe((response: any) => {
      expect(response.message).toEqual('UNSUCCESSFULL');
    });
  });
});
