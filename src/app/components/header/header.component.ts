import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserStorageService } from 'src/app/services/browser-storage.service';
import { LoggedBehaviorSubjectService } from 'src/app/services/logged-behavior-subject.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean;

  constructor(
    private readonly browserStorageService: BrowserStorageService,
    private readonly router: Router,
    private readonly loggedBehaviorSubjectService: LoggedBehaviorSubjectService
  ) {
    this.isLogged = false;
    this.setIslogged();
  }

  ngOnInit(): void {
    this.listenChangeIslogged();
  }

  listenChangeIslogged(): void {
    this.loggedBehaviorSubjectService.getIslogged().subscribe((state) => {
      this.isLogged = state || !!this.browserStorageService.getItem('token');
    });
  }

  setIslogged(): void {
    this.isLogged = !!this.browserStorageService.getItem('token');
  }

  logOut(): void {
    this.browserStorageService.logOut();
    this.loggedBehaviorSubjectService.setIslogged(false);
    this.goTo('/');
  }

  goTo(action: string): void {
    this.router.navigate([`${action}`]);
  }
}
