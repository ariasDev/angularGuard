import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authServiceService: AuthServiceService
  ) {
    this.userForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.minLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.userForm);
  }

  get email(): AbstractControl { return this.userForm.get('email') || new FormControl(''); }
  get password(): AbstractControl { return this.userForm.get('password') || new FormControl(''); }
}
