import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(private authService: AuthenticationService, private router: Router) {
    this.authService.loggedUser.subscribe({
      next: (value: any) => {
        if (value.email != undefined) this.router.navigate(['game/home']);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
