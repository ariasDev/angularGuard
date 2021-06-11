import { Component, OnInit } from '@angular/core';
import { BrowserStorageService } from 'src/app/services/browser-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName: any;

  constructor(private readonly browserStorageService: BrowserStorageService) {
    this. getUsername();
  }

  getUsername(): void {
    this.userName = this.browserStorageService.getItem('name');
  }

  ngOnInit(): void {
  }

}
