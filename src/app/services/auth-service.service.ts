import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../models/userData';
import { BrowserStorageService } from './browser-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl = 'http://localhost:3001';

  constructor(private httpClient: HttpClient, private browserStorageService: BrowserStorageService) {
  }

  login(userData: UserData): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/login`, userData);
  }

  isLogged(): boolean {
    if (this.browserStorageService.getItem('token')) {
      return true;
    }
    return false;
  }

}
