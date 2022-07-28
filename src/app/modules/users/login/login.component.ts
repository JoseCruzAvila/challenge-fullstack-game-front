import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.authService.loggedUser.subscribe({
      next: (value) => {
        if (value.email != undefined) this.router.navigate(['game/home']);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  signIn(userName: string, password: string) {
    this.authService.signIn(userName, password);
  }

  auth() {
    this.authService.googleAuth();
  }

}
