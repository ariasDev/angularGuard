import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '',   redirectTo: '/landing', pathMatch: 'full' },
  // { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  // { path: 'error', component: ErrorComponent, pathMatch: 'full' },
  // { path: '**', redirectTo: '/error', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
