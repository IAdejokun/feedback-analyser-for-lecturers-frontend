import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import {AuthService} from '../service/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(AuthService);
  const router = inject(Router);


  if(!authService.isLoggedIn()){
    return router.createUrlTree(['/login']);
  }

   const user_role = authService.getUserRole();
   const required_role = route.data['role'];

   if(required_role && user_role !== required_role){
      if(user_role === 'lecturer'){
        return router.createUrlTree(['/lecturer/dashboard']);
      } else if(user_role === 'student'){
        return router.createUrlTree(['/student/dashboard']);
      } else {
        return router.createUrlTree(['/login']);
      }
   }

   return true;
};
