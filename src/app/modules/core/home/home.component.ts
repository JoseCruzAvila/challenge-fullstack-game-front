import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  joinSesion : boolean = false;
  buttonText : string = "Unirse a una partida";
  waitingUsers :boolean = false;

  constructor() { }

  ngOnInit(): void {
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

}
