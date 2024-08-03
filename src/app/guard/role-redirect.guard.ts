import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service'; 

export const roleRedirectGuard: CanActivateFn = (route, state) => {
 
  const authService = inject(AuthService);
  const router = inject(Router);
 
  if(authService.isLoggedIn()){

    const userRole = authService.getUserRole();

    if(userRole === 'lecturer'){
      return router.createUrlTree(['/lecturer/dashboard']);
    } else if(userRole === 'student'){
      return router.createUrlTree(['/student/dashboard']);
  }

  }

    return true;
};
