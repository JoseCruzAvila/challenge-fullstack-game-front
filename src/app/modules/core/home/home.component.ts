import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Player } from 'src/app/shared/models/player';
import { PlayerService } from 'src/app/shared/services/player.service';

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
  #player!: Player;

  createGameForm :  FormGroup;
  constructor(private router: Router,  private formGroup: FormBuilder, private playerService: PlayerService) { 
    this.createGameForm = this.formGroup.group({
      gameId: new FormControl('', [Validators.required]),
      playerNumber : new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.playerService.player.subscribe({
      next: (value) => {
        this.#player = value;
      },
      error: console.error
    });
    this.cards = Array.from(Array(11).keys());
    this.cards = this.cards.filter(card => card > 0);
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
