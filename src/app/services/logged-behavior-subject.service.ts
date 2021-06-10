import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedBehaviorSubjectService {

  private isLoggedManager$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() { }

  setIslogged(state: boolean): void {
    this.isLoggedManager$.next(state);
  }

  getIslogged(): Observable<boolean> {
    return this.isLoggedManager$.asObservable();
  }
}
