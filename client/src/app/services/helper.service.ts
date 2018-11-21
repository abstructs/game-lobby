import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private cookieService: CookieService) { }

  setToken(token: string) {
    this.cookieService.set('token', `Bearer ${token}`);
  }

  revokeToken() {
    this.cookieService.delete('token');
  }

  getToken(): string {
    return this.cookieService.get('token');
  }
}
