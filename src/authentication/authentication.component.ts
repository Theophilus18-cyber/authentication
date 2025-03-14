import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { Login } from './login';
import { Registration } from './registration';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  isLoginActive = true;
  loginData: Login = { username: '', password: '' };
  registerData: Registration = {   name: '', surname: '', idOrPassport: '', contact: '', email: '', password: '', confirmPassword: '', terms: false };

  constructor(private authService: AuthenticationService) {}

  showLogin() {
    this.isLoginActive = true;
  }

  showRegister() {
    this.isLoginActive = false;
  }

  onLoginSubmit() {
    // Handle login form submission
    this.authService.login(this.loginData).subscribe(
      response => {
        console.log('Login successful', response);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }

  onRegisterSubmit() {
    // Handle register form submission
    this.authService.register(this.registerData).subscribe(
      response => {
        console.log('Registration successful', response);
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}