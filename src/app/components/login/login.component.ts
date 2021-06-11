import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginResponse } from 'src/app/models/loginResponse';
import { BrowserStorageService } from 'src/app/services/browser-storage.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { LoggedBehaviorSubjectService } from 'src/app/services/logged-behavior-subject.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authServiceService: AuthServiceService,
    private browserStorageService: BrowserStorageService,
    private readonly router: Router,
    private readonly loggedBehaviorSubjectService: LoggedBehaviorSubjectService
  ) {
    this.userForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.minLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  ngOnInit(): void {
    this.isLogged();
  }

  isLogged(): void {
    if (this.browserStorageService.getItem('token')) {
      this.goTo('home');
    }
  }

  login(): void {
    if (this.userForm.valid) {
      this.authServiceService.login(this.userForm.value).subscribe(
        (response: LoginResponse) => {
          this.browserStorageService.setItem('token', response.userData.token);
          this.browserStorageService.setItem('name', response.userData.userName);
          this.browserStorageService.setItem('email', response.userData.userEmail);
          this.loggedBehaviorSubjectService.setIslogged(true);
          this.userForm.reset();
          this.goTo('home');
        },
        (reject: HttpErrorResponse) => {
          alert(`Error iniciando sesion, ${reject.error.errorDescription}`);
        }
      );
    } else {
      alert('problemas iniciando sesion');
    }
  }

  goTo(action: string): void {
    this.router.navigate([`${action}`]);
  }

  get email(): AbstractControl { return this.userForm.get('email') || new FormControl(''); }
  get password(): AbstractControl { return this.userForm.get('password') || new FormControl(''); }
}
