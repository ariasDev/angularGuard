import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserStorageService } from 'src/app/services/browser-storage.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private readonly router: Router, private readonly browserStorageService: BrowserStorageService) { }

  ngOnInit(): void {
    this.getToken();
  }

  getToken(): void {
    const token = this.browserStorageService.getItem('token');
    console.log(token);
    if (token) {
      this.goTo('home');
    }
  }

  goTo(action: string): void {
    this.router.navigate([`${action}`]);
  }

}
