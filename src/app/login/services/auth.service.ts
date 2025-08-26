// ...existing code...
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  login(usuario: string, contrasenia: string, empresa: string): Observable<any> {
    // Simulación local: usuario: admin, contraseña: 12345, empresa: cualquier valor
    if (usuario === 'admin' && contrasenia === '12345' && empresa) {
      return new Observable(observer => {
        observer.next({ token: 'fake-token', user: { nombre: 'Admin', username: usuario } });
        observer.complete();
      });
    } else {
      return new Observable(observer => {
        observer.error('Credenciales incorrectas');
      });
    }
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  clearToken() {
    localStorage.removeItem('token');
  }
  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): any {
    const u = localStorage.getItem('user');
    return u ? JSON.parse(u) : null;
  }

  clearUser() {
    localStorage.removeItem('user');
  }

  logout() {
    this.clearToken();
    this.clearUser();
  }
}
