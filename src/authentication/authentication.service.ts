import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';
import { Observable } from 'rxjs';
import { Registration } from './registration';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private LoginUrl = 'http://localhost:5293/api/users/login';
  private RegisterUrl = 'http://localhost:5293/api/users/register';

  constructor(private http:HttpClient) { }

  login(data:Login):Observable<any>{
    return this.http.post<any>(this.LoginUrl, data);
  }
  register(data:Registration):Observable<any>{
    return this.http.post<any>(this.RegisterUrl, data);
  }
}
