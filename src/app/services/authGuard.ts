import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthServiceService, private router: Router) { }

    canActivate(): boolean {
        if (!this.authService.isLogged()) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}
