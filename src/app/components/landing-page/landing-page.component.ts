import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { BrowserStorageService } from 'src/app/services/browser-storage.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly browserStorageService: BrowserStorageService,
    private readonly authServiceService: AuthServiceService
  ) { }

  ngOnInit(): void {
  }

  goTo(action: string): void {
    this.router.navigate([`${action}`]);
  }

}
