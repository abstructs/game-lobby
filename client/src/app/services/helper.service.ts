import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export enum LobbyTab {
  PLAYERS = 0,
  GAMES = 1
}

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private cookieService: CookieService) { }

  setToken(token: string) {
    this.cookieService.set('token', token);
  }

  revokeToken() {
    this.cookieService.delete('token');
  }

  getToken(): string {
    return this.cookieService.get('token');
  }
}
