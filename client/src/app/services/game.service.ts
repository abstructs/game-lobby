import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BackendService } from './backend.service';
import { map, catchError } from 'rxjs/operators';
import { SearchQuery } from './helper.service';

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

  findByField(searchQuery: SearchQuery) {
    return this.backend.findGamesByField(searchQuery).pipe(
      map((res) => {
        return res['games'];
      }),
      catchError(() => of(null))
    );
  }

  findAll(): Observable<Game[]> {
    return this.backend.findAllGames().pipe(
      map(res => {
        return res['games'];
      }),
      catchError(() => of(null))
    );
  }

  findAllTitles(): Observable<Object[]> {
    return this.backend.findAllGameTitles().pipe(
      map(res => {
        return res['games'];
      }),
      catchError(() => of([]))
    )
  }

  removeOne(gameId: string) {
    return this.backend.removeGame(gameId).pipe(
      map(() => true),
      catchError(() => of(false))
    );
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
