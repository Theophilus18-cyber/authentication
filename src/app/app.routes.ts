import { Routes } from '@angular/router';
import { AuthenticationComponent } from '../authentication/authentication.component';

export const routes: Routes = [
  { path: 'authentication', component: AuthenticationComponent },
  { path: '', redirectTo: '/authentication', pathMatch: 'full' }
];