import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.sass']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

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

  forgotPassword(email: string) {
    this.authService.forgotPassword(email);
  }

}
