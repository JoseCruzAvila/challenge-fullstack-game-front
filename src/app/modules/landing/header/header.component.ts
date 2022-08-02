import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  #user!: User;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
  ) {
    
  }

  ngOnInit(): void {
    this.authService.loggedUser.subscribe({
      next: (value: any) => {
        if (value.email == undefined) this.router.navigate(['login']);
        this.#user = value;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  signOut() {
    this.authService.signOut();
  }

  userName() {
    return this.#user.name;
  }

  userEmail() {
    return this.#user.email;
  }

  userImage() {
    return this.#user.profileImage;
  }

  hasImage() {
    return this.#user.profileImage != null ? true : false;
  }

  isAdmin() {
    return this.#user.isAdmin;
  }

  isLogged() {
    return this.#user != null;
  }

}
