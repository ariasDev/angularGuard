import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /*
  *
  *un fb o FormBuilder sirve para crear instancias de FormControl y FormGroups con una sintaxis mas corta
  * tiene metodo tales como group() array()
  */
  loginForm = this.fb.group({
    email: [''],
    password: ['']
  })

  responseServer: any;

  constructor(
    private fb: FormBuilder,
    private authServiceService: AuthServiceService
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log("Formulario ", this.loginForm.value);
    this.authServiceService.login(this.loginForm.value).subscribe(
      resolve => {
        this.responseServer = resolve;
        console.log('----------------------------------this.responseServer:', this.responseServer);
      },
      reject => {
        this.responseServer = reject;
        console.log('----------------------------------this.responseServer:', this.responseServer);
      })
  } 

}
