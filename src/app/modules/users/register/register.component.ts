import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) {
    //private displayService: DisplayService
  }

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

  signUp(email: string, password: string) {
    this.authService.signUp(email, password);
  }

}
