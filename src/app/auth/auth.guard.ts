import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../shared/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    this.authService.loggedUser.subscribe({
      next: (value) => {
        if (value.email == undefined) this.#goLogin();
      },
      error: () => {
        this.#goLogin();
      }
    });
    
    return true;
  }

  #goLogin() {
    this.router.navigate(["login"]);
  }
  
}
