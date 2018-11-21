import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BackendService } from './backend.service';
import { map, catchError } from 'rxjs/operators';

export interface Game {
  title: string;
  platform: string;
  genre: string;
  publisher: string;
  release: Number;
  status: string;
}

@Injectable({
  providedIn: 'root'
})

export class GameService {

  constructor(private backend: BackendService) { }

  findAll(): Observable<Game[]> {
    return this.backend.findAllGames().pipe(
      map(res => {
        return res['games'];
      }),
      catchError(() => of(null))
    )
  }

  removeOne(gameId: string) {
    return this.backend.removeGame(gameId).pipe(
      map(() => true),
      catchError(() => of(false))
    )
  }

  updateOne(gameId: string, game: Game): Observable<boolean> {
    return this.backend.updateGame(gameId, game).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  addOne(game: Game): Observable<boolean> {
    return this.backend.addGame(game).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}
