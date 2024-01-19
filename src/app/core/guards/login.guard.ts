import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const loginGuard: CanActivateFn = (route, state) => {
  if (!inject(AuthService).isAuthenticatedUser()) {
    return true;
  } else {
    inject(Router).navigate(['/dashboard']);
    return false;
  }
};
