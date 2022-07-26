import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private cookieService: CookieService,private router : Router){}

  redirect(flag: boolean): void {
    if (!flag) {
      this.router.navigate(['game/home']);
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const admin = JSON.parse(this.cookieService.get('user')).admin //JSON.parse(localStorage.getItem('user')!).admin;
    this.redirect(admin);
    return admin;
  }
  
}
