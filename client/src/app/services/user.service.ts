import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private backend: BackendService, private http: HttpClient,
    private cookieService: CookieService) { }

  getToken(): string {
    // const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // return currentUser.token;
    return this.cookieService.get('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() != '';
  }

  setToken(token: string) {
    this.cookieService.set('token', token);
  }

  revokeToken() {
    this.cookieService.delete('token');
  }

  authenticate(username: string, password: string): Observable<boolean> {
    return this.backend.authenticate(username, password).pipe(
      map(res => {
        const { token } = res['auth'];
        this.setToken(token);
        return true;
      }),
      catchError((err) => {
        this.revokeToken();
        return of(false);
      })
    )
  }

  usernameTaken(username: string):Observable<boolean> {
    // console.log('username taken ran');
    return this.backend.validUsername(username).pipe(
      map(res => {
        return false;
      }),
      catchError((err) => {
        return of(true);
      })
    );
  }
}
