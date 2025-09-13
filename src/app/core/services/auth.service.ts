import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private tokenKey = 'auth_token';

  constructor(private api: ApiService) {}

  login(email: string, password: string) {
    return this.api.post<{ token: string }>('/auth/login', { email, password }).pipe(
      tap(res => localStorage.setItem(this.tokenKey, res.token))
    );
  }

  register(email: string, password: string) {
    return this.api.post('/auth/register', { email, password });
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn() {
    return !!this.getToken();
  }
}
