import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
  
  }

  signIn(userName: string, password: string) {
    this.authService.signIn(userName, password);
  }

  auth() {
    this.authService.googleAuth();
  }

}
