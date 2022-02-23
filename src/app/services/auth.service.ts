import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { v4 } from 'uuid';
import { catchError, delay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Token } from '../model/token.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseURL: string;
  // private _id: string = JSON.parse(localStorage.getItem('tokenId')) || null;
  // private _token: Token = null;

  private _token: string = JSON.parse(localStorage.getItem('token')) || null;
  // private _token: boolean = false;
  private _password: string = 'admin@1234';
  constructor(private router: Router, private http: HttpClient) {
    this.baseURL = environment.JSONServerURL;
    // this.getToken().subscribe((response) => {
    //   console.log(response);
    // });
  }

  onLogin(password: string) {
    return new Observable((observer) => {
      if (this._password === password) {
        this._token = v4();
        // this._token = {
        //   id: v4(),
        //   value: v4(),
        // };
        // console.log(this._token);
        // this.postToken();
        // this.http
        //   .get(`${this.baseURL}/token?value=${this._token}`)
        //   .subscribe((response) => {
        //     console.log(response);
        //   });
        // this._token = true;
        // console.log('TOKEN - ', this._token);
        // localStorage.setItem('tokenId', JSON.stringify(this._token.id));
        localStorage.setItem('token', JSON.stringify(this._token));
        observer.next({ message: 'SUCCESS' });
      } else {
        observer.next({ message: 'UNSUCCESSFULL' });
      }
    });
  }

  // getToken(): Observable<Token> {
  //   this.http
  //     .get<Token>(`${this.baseURL}/token/${this._id}`)
  //     .subscribe((response: any) => {
  //       this._token = response.value;
  //       this._id = response.id;
  //       localStorage.setItem('tokenId', JSON.stringify(this._id));
  //       console.log(this._token, this._id);
  //       return response.value;
  //       this._token = response.value;
  //     });

  //   return this.http.get<Token>(`${this.baseURL}/token/${this._id}`);
  // }

  // postToken() {
  //   this.http.post(`${this.baseURL}/token`, this._token).subscribe({
  //     next: (response) => console.log(response),
  //     error: (err) => console.log(err),
  //     complete: () => console.log('COMPLETED'),
  //   });

  //   this.http
  //     .get<Token>(`${this.baseURL}/token?value=${this._token.value}`)
  //     .subscribe((response) => {
  //       alert(response.value);
  //     });
  // }

  isAuthenticated() {
    return this._token !== null;
  }

  onLogOut() {
    localStorage.clear();
    this._token = null;
    // this._token = false;
    this.router.navigate(['']);
  }
}
