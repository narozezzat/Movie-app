import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log(route);
  const isLoggedIn: boolean = localStorage.getItem('access_token')
    ? true
    : false;
  return true;
};
