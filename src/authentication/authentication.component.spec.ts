import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationService } from './authentication.service';
import { of, throwError } from 'rxjs';

describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;
  let authService: AuthenticationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [AuthenticationComponent],
      providers: [AuthenticationService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthenticationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should switch to login form', () => {
    component.showLogin();
    expect(component.isLoginActive).toBeTrue();
  });

  it('should switch to register form', () => {
    component.showRegister();
    expect(component.isLoginActive).toBeFalse();
  });

  it('should call login on submit', () => {
    const loginSpy = spyOn(authService, 'login').and.returnValue(of({ success: true }));
    component.loginData = { EmailOrId: 'test@example.com', password: 'password123' };
    component.onLoginSubmit();
    expect(loginSpy).toHaveBeenCalledWith(component.loginData);
  });

  it('should handle login error', () => {
    const loginSpy = spyOn(authService, 'login').and.returnValue(throwError({ error: 'Login failed' }));
    spyOn(console, 'error');
    component.loginData = { EmailOrId: 'test@example.com', password: 'password123' };
    component.onLoginSubmit();
    expect(loginSpy).toHaveBeenCalledWith(component.loginData);
    expect(console.error).toHaveBeenCalledWith('Login failed', { error: 'Login failed' });
  });

  it('should call register on submit', () => {
    const registerSpy = spyOn(authService, 'register').and.returnValue(of({ success: true }));
    component.registerData = {
      name: 'John',
      surname: 'Doe',
      idOrPassport: '123456789',
      contact: '1234567890',
      email: 'john.doe@example.com',
      password: 'password123',
      confirmPassword: 'password123',
      terms: true
    };
    component.onRegisterSubmit();
    expect(registerSpy).toHaveBeenCalledWith(component.registerData);
  });

  it('should handle register error', () => {
    const registerSpy = spyOn(authService, 'register').and.returnValue(throwError({ error: 'Registration failed' }));
    spyOn(console, 'error');
    component.registerData = {
      name: 'John',
      surname: 'Doe',
      idOrPassport: '123456789',
      contact: '1234567890',
      email: 'john.doe@example.com',
      password: 'password123',
      confirmPassword: 'password123',
      terms: true
    };
    component.onRegisterSubmit();
    expect(registerSpy).toHaveBeenCalledWith(component.registerData);
    expect(console.error).toHaveBeenCalledWith('Registration failed', { error: 'Registration failed' });
  });
});