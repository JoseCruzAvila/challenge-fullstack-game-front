import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  cards : Array<number> = [];
  imageurl    : string = "./../../../../assets/img/card-back/";
  joinSesion : boolean = false;
  buttonText : string = "Unirse a una partida";
  waitingUsers :boolean = false;
  displayStyle: string = "none";

  createGameForm :  FormGroup;
  constructor(private router: Router,  private formGroup: FormBuilder,) { 

    this.createGameForm = this.formGroup.group({
      gameId: new FormControl('', [Validators.required]),
      playerNumber : new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.cards = Array.from(Array(11).keys());  
  }

  changeForm(): void {
    if(this.joinSesion){
      this.joinSesion = false;
      this.buttonText = "Unirse a una partida"
    } else {
      this.joinSesion = true;
      this.buttonText = "Crear Partida"
    }
  }

  createGame():void{
    this.waitingUsers = true;
  }

  joinGame(){
    this.router.navigate(['game/fight']);
  }

  initGame():void {
    console.log('sisas');
    
    this.router.navigate(['game/fight']);
  }

  closePopup():void {//displayStyle: string = "none";
    this.displayStyle = ''//event.display;
  }

}
