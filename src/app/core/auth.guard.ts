import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../login/services/auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  // Verifica si localStorage está disponible
  let token = null;
  if (typeof window !== 'undefined' && window.localStorage) {
    token = auth.getToken();
  }
  if (token) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
