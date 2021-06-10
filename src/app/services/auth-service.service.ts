import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../models/userData';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl = 'http://localhost:3001';

  constructor(private httpClient: HttpClient) { }

  login(userData: UserData): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/login`, userData);
  }
}
