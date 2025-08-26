import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../login/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private router = inject(Router);
  private auth: any = inject(AuthService);
  usuario = '';
  contrasenia = '';
  empresa = '';
  error = '';

  onLogin(event: Event) {
    event.preventDefault();
    this.auth.login(this.usuario, this.contrasenia, this.empresa).subscribe({
      next: (resp: any) => {
        // Suponiendo que el token viene en resp.token
        if (resp && resp.token) {
          this.auth.setToken(resp.token);
          this.error = '';
          this.router.navigate(['/dashboard']);
        } else {
          this.error = 'Respuesta de autenticación inválida';
        }
      },
      error: () => {
        this.error = 'Usuario, contraseña o empresa incorrectos';
      }
    });
  }
}
