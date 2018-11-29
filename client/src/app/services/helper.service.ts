import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export enum LobbyTab {
  PLAYERS = 0,
  GAMES = 1
}

export interface SearchQuery {
  FIELD: string;
  QUERY: string;
  TAB: LobbyTab;
}

export const api_url = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private cookieService: CookieService) { }

  hasToken() {
    return this.cookieService.check('token');
  }

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
