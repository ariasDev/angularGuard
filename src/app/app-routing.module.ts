import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/authGuard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  // { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'not-found', component: ErrorComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
