import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { 
    //private displayService: DisplayService
  }

  ngOnInit(): void {
    this.authService.isLoggedIn ? this.router.navigate(['game/home']): "";
  }

  signIn(userName: string, password: string) {
    this.authService.SignIn(userName, password);
  }

  auth() {
    this.authService.GoogleAuth();
  }

}
