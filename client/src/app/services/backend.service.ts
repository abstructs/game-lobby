import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './player.service';
import { HelperService } from './helper.service';
import { HttpHeaders } from '@angular/common/http';
// import { Game } from './game.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  api_url = "http://localhost:3000";
  httpOptions: { headers: HttpHeaders };

  constructor(private http: HttpClient, private helperService: HelperService) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.helperService.getToken()}`
      })
    }
  }

  findAllPlayers(): Observable<Object> {
    return this.http.get(`${this.api_url}/player`);
  }

  // player
  addPlayer(player: Player): Observable<Object> {
    return this.http.post(`${this.api_url}/player/add`, {
      player
    });
  }

  updatePlayer(playerId: string, player: Player): Observable<Object> {
    return this.http.patch(`${this.api_url}/player/edit/${playerId}`, { player }, this.httpOptions);
  }

  removePlayer(playerId: string) {
    return this.http.delete(`${this.api_url}/player/delete/${playerId}`, this.httpOptions);
  }

  // deletePlayer(playerId: string) {

  // }

  // user

  authenticate(username: string, password: string): Observable<Object> {
    return this.http.post(`${this.api_url}/user/login`, {
      user: {
        username,
        password
      }
    });
  }

  validUsername(username: string): Observable<Object> {
    return this.http.post(`${this.api_url}/user/valid-username`, {
      user: {
        username
      }
    });
  }
}
