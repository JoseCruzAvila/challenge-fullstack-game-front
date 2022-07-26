import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  displayStyle: string = "none";
  loggedUser : string = "";
  userName   : string = "";
  isAdmin : boolean = true;
  profileForm! : FormGroup;
  
  constructor(
    private router:Router,
    private authService: AuthenticationService,
    private formGroup: FormBuilder,
    private cookieService: CookieService
  ) {
   
    let user = JSON.parse(this.cookieService.get('user'))
    
    if (user != null) {
      this.isAdmin = user.admin;
      this.loggedUser = user.email;
      this.userName = this.loggedUser.split('@')[0];
    }
    this.profileForm = this.formGroup.group({
      email: new FormControl("", [Validators.required]),
      //descripcion: new FormControl("", [Validators.required]),
    });
    this.profileForm.get("email")?.setValue(this.loggedUser);
   }

  ngOnInit(): void {
    this.loggedUser === "" ?  this.router.navigate(['login']) : "";
  }

  signOut() {
    this.authService.SignOut();
  }

  isLogged() {
    return this.authService.isLoggedIn;
  }

  closePopup(): void {
    this.displayStyle = "none"; // "none"
  }

  openPopup() {   
    this.displayStyle = "block";
  }

  updateUser():void {

  }

}
