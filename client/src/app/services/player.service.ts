import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export interface Player {
  name: string;
  rank: Number;
  score: Number;
  time: string;
  gamePlayed: string;
  status: string;
  option: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private backend: BackendService) { } 

  findAll(): Observable<Player[]> {
    return this.backend.findAllPlayers().pipe(
      map(res => {
        return res['players'];
      }),
      catchError(() => of(null))
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