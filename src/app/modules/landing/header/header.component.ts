import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { CookieService } from "ngx-cookie-service";
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  #user!: User;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private formGroup: FormBuilder,
  ) {
    /*this.profileForm = this.formGroup.group({
      email: new FormControl("", [Validators.required]),
      //descripcion: new FormControl("", [Validators.required]),
    });
    this.profileForm.get("email")?.setValue(this.#user.email);*/
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

  updateUser(): void {

  }

  userName() {
    return this.#user.name;
  }

  userEmail() {
    return this.#user.email;
  }

  isAdmin() {
    return this.#user.isAdmin;
  }

  isLogged() {
    return this.#user != null;
  }

}
