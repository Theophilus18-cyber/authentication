import { Routes } from '@angular/router';
import { AuthenticationComponent } from '../authentication/authentication.component';
import {HomeComponent} from '../home/home.component';
export const routes: Routes = [
  { path: 'authentication', component: AuthenticationComponent },
  { path: '', redirectTo: '/authentication', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];