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
    this.authService.isLoggedIn ? this.router.navigate(['game/home']): "";
  }

}
