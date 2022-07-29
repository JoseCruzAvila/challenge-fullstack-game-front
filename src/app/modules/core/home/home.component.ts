import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Game } from 'src/app/shared/models/game';
import { Player } from 'src/app/shared/models/player';
import { GameService } from 'src/app/shared/services/game.service';
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
  game!: Game;

  createGameForm :  FormGroup;
  constructor(private router: Router,  private formGroup: FormBuilder, private playerService: PlayerService,
    private gameService: GameService) { 
    this.createGameForm = this.formGroup.group({
      gameId: new FormControl('', [Validators.required]),
      playerNumber : new FormControl(2, [Validators.required])
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
    let gameToCreate = {
      gameId: this.createGameForm.get("gameId")?.value,
      players: [this.#player],
      currentPlayersNumber: this.createGameForm.get("playerNumber")?.value
    }

    this.gameService.createGame(gameToCreate).subscribe({
      next: (value: Game) => {
        this.waitingUsers = true;
        this.game = value;
      },
      error: console.error
    });
  }

  joinGame(){
    this.router.navigate(['game/fight']);
  }

  startGame():void {
    this.gameService.startGame(this.game.gameId).subscribe({
      next: (value: any) => {
        this.gameService.setGameSubject(value);
        this.game = value;
        this.router.navigate(['game/fight']);
      },
      error: console.error
    });
  }

  closePopup():void {//displayStyle: string = "none";
    this.displayStyle = ''//event.display;
  }

}
