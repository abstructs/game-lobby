import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './lobby/lobby.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  api_url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

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
