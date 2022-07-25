import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  joinSesion : boolean = false;
  buttonText : string = "Unirse a una partida";
  waitingUsers :boolean = false;
  displayStyle: string = "none";
  constructor(private router: Router) { }

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

  initGame():void {
    console.log('sisas');
    
    this.router.navigate(['game/fight']);
  }

  closePopup():void {//displayStyle: string = "none";
    this.displayStyle = ''//event.display;
  }

}
