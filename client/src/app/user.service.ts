import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private backend: BackendService, private http: HttpClient) { }

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
