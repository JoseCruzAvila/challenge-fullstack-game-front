import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  #loggedUserSubject: BehaviorSubject<User> = new BehaviorSubject({} as User);
  public readonly loggedUser: Observable<User> = this.#loggedUserSubject.asObservable();

  constructor(private firestore: AngularFirestore, private authentication: AngularFireAuth, private router: Router) {
    this.authentication.authState.subscribe({
      next: (response) => {
        if (response != null) this.#getUserFromCollection(response);
      },
      error: (e) => {
        this.#onError(e);
      }
    });
  }

  async signIn(email: string, password: string) {
    this.authentication.signInWithEmailAndPassword(email, password)
      .then(response => {
        this.#getUserFromCollection(response.user);
      })
      .catch(this.#onError);
  }

  // Regístrese
  async signUp(email: string, password: string) {
    this.authentication.createUserWithEmailAndPassword(email, password)
      .then(response => {
        this.#getUserFromCollection(response.user);
      });
  }

  // Enviar verificación de correo electrónico cuando se registre un nuevo usuario
  async sendVerificationEmail() {
    this.authentication.currentUser
      .then(user => {
        user!.sendEmailVerification()
          .then(() => this.router.navigate(['verificar el correo']))
          .catch(this.#onError);
      })
      .catch(this.#onError);
  }

  async forgotPassword(passwordResetEmail: string) {
    this.authentication
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Correo electrónico de restablecimiento de contraseña enviado, verifique su bandeja de entrada.');
        this.router.navigate(['login']);
      })
      .catch(this.#onError);
  }

  async googleAuth() {
    this.authentication.signInWithPopup(new auth.GoogleAuthProvider())
      .then(response => {
        this.#getUserFromCollection(response.user);
      })
      .catch(this.#onError);
  }

  async signOut() {
    return this.authentication.signOut()
      .then(() => {
        this.#loggedUserSubject.next({} as User);
        this.router.navigate(['login']);
      })
      .catch(this.#onError);
  }

  #storeUser(userToStore: any) {
    let user: User = {
      id: userToStore.uid,
      name: userToStore.displayName,
      email: userToStore.email,
      profileImage: "",
      emailVerified: userToStore.emailVerified,
      isAdmin: false
    }

    this.firestore.collection("users").add(user)
      .then(storedUser => {
        storedUser.get()
          .then(currentUser => {
            this.#loggedUserSubject.next(currentUser.data() as User);
            this.router.navigate(["game/home"])
          })
          .catch(this.#onError)
      })
      .catch(this.#onError)
  }

  #getUserFromCollection(userData: any) {
    this.firestore.collection("users").ref.where("email", "==", userData.email)
      .get()
      .then(response => {
        this.#loadLoggedUserOrStore(response, userData);
      })
      .catch(this.#onError);
  }

  #loadLoggedUserOrStore(response: any, userData: any) {
    let currentUser = response.docs.filter((doc: any) => {
      let user = doc.data() as User;
      return user.email.includes(userData.email)
    })[0];
    
    currentUser != undefined ? this.#loggedUserSubject.next(currentUser.data() as User) : this.#storeUser(userData);
  }

  #onError(error: any) {
    console.error(error);
  }
}
