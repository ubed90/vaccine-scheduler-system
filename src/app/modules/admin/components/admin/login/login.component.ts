import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  showPassword: boolean = false;
  invalidPassword: boolean = false;

  loginForm: FormGroup;

  username = new FormControl({ value: 'admin', disabled: true });
  password = new FormControl('', [Validators.required]);

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: this.username,
      password: this.password,
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    // console.log(this.loginForm.value);
    const { email, password } = this.loginForm.value;

    this.authService.onLogin(password).subscribe((response: any) => {
      if (response.message === 'SUCCESS') {
        this.router.navigate(['/admin/home']);
      } else {
        this.invalidPassword = !this.invalidPassword;
        setTimeout(() => {
          this.invalidPassword = !this.invalidPassword;
        }, 2000);
      }
    });

    // this.authService.onLogin(password).subscribe({
    //   next: (response) => console.log(response),
    //   error: (err) => console.log(err),
    //   complete: () => console.log('[COMPLETED]'),
    // });

    // this.authService.onLogin(password).subscribe({
    //   next(response: any) {
    //     if (response.message === 'SUCCESS') {
    //       console.log('LOGIN SUCCESSFULL');
    //     }
    //   },
    //   error(msg) {
    //     console.log('ERROR IS :: ', msg);
    //     console.log(this.invalidPassword);
    //     this.invalidPassword = !this.invalidPassword;
    //     setTimeout(() => {
    //       this.invalidPassword = !this.invalidPassword;
    //     }, 2000);
    //   },
    //   complete() {
    //     console.log('[COMPLETED]');
    //   },
    // });
  }

  onReset() {
    this.loginForm.reset();
    this.loginForm.get('username').setValue('admin');
  }
}
