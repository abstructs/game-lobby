import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { SearchQuery } from './helper.service';

export interface Player {
  name: string;
  rank: Number;
  score: Number;
  time: string;
  gamePlayed: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private backend: BackendService) { }

  findByField(searchQuery: SearchQuery): Observable<Player[]> {
    return this.backend.findPlayersByField(searchQuery).pipe(
      map(res => {
        return res['players'];
      }),
      catchError(() => of(null))
    );
  }

  findAll(): Observable<Player[]> {
    return this.backend.findAllPlayers().pipe(
      map(res => {
        return res['players'];
      }),
      catchError(() => of(null))
    )
  }

  joinGame(playerId: string, gameId: string): Observable<boolean> {
    return this.backend.joinGame(playerId, gameId).pipe(
      map(res => {
        return true;
      }),
      catchError(() => of(false))
    )
  }

  removeOne(playerId: string) {
    return this.backend.removePlayer(playerId).pipe(
      map(() => true),
      catchError(() => of(false))
    )
  }

  updateOne(playerId: string, player: Player): Observable<boolean> {
    return this.backend.updatePlayer(playerId, player).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  addOne(player: Player): Observable<boolean> {
    return this.backend.addPlayer(player).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}
