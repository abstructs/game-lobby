import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './player.service';
import { HelperService } from './helper.service';
import { HttpHeaders } from '@angular/common/http';
import { Game } from './game.service';
import { SearchQuery, api_url } from './helper.service';

// import { Game } from './game.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  api_url: string;
  httpOptions: { headers: HttpHeaders };

  constructor(private http: HttpClient, private helperService: HelperService) { 
    this.api_url = api_url;
    
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.helperService.getToken()}`
      })
    }
  }

  // game

  findGamesByField(searchQuery: SearchQuery) {
    return this.http.get(`${this.api_url}/game/search/${searchQuery.FIELD}/${searchQuery.QUERY}`)
  }

  findGamesByTitle(gameTitle: string): Observable<Object> {
    return this.http.get(`${this.api_url}/game/search/${gameTitle}`);
  }

  findAllGames(): Observable<Object> {
    return this.http.get(`${this.api_url}/game`, this.httpOptions);
  }

  findAllGameTitles(): Observable<Object> {
    return this.http.get(`${this.api_url}/game/titles`);
  }

  addGame(game: Game): Observable<Object> {
    return this.http.post(`${this.api_url}/game/add`, {
      game
    });
  }

  updateGame(gameId: string, game: Game): Observable<Object> {
    return this.http.patch(`${this.api_url}/game/edit/${gameId}`, { game }, this.httpOptions);
  }

  removeGame(gameId: string) {
    return this.http.delete(`${this.api_url}/game/delete/${gameId}`, this.httpOptions);
  }

  // player

  findPlayersByField(searchQuery: SearchQuery): Observable<Object> {
    return this.http.get(`${this.api_url}/player/search/${searchQuery.FIELD}/${searchQuery.QUERY}`);
  }

  findAllPlayers(): Observable<Object> {
    return this.http.get(`${this.api_url}/player`);
  }

  joinGame(playerId: string, gameId: string): Observable<Object> {
    return this.http.post(`${this.api_url}/player/join-game`, { gameId, playerId }, this.httpOptions);
  }

  addPlayer(player: Player): Observable<Object> {
    return this.http.post(`${this.api_url}/player/add`, {
      player
    });
  }

  updatePlayer(playerId: string, player: Player): Observable<Object> {
    return this.http.patch(`${this.api_url}/player/edit/${playerId}`, { player }, this.httpOptions);
  }

  removePlayer(playerId: string) {
    console.log("remove player")
    console.log(this.httpOptions);

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
