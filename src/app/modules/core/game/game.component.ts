import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { GameService } from 'src/app/shared/services/game.service';
import { Game } from 'src/app/shared/models/game';
import { Player } from 'src/app/shared/models/player';
import { PlayerService } from 'src/app/shared/services/player.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  //cards1 : Observable<number[]> = [];
  cards1 : Array<number> = [];
  cards2 : Array<number> = [];
  game!: Game;
  #player!: Player;

  constructor(private gameService: GameService, private playerService: PlayerService) { 
    this.cards1 = Array.from(Array(6).keys());  
    this
  }

  ngOnInit(): void {
    this.playerService.player.subscribe({
      next: (value) => {
        this.#player = value;
      },
      error: console.error
    });

    this.gameService.game.subscribe({
      next: (value) => {
        this.game = value;
      },
      error: console.error
    });

    this.#startSocket();
  }
  
  ngOnChanges(){
    if (this.cards2.length === 6) {
      console.log("todos ya jugaron");
      
    }
  }

  drop(event: CdkDragDrop<number[]>):void{
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
    console.log(event.container.data);

    if(event.container.data.length === 6){
      alert("todos ya jugaron");
    }
    
  }

  #startSocket() {
    this.gameService.messages.subscribe({
      next: (value) => {
        console.log(value);
      },
      error: console.error
    });
  }

}
