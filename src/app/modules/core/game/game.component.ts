import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  cards1 : Array<number> = [];
  cards2 : Array<number> = [];
  constructor() { 
    this.cards1 = Array.from(Array(6).keys());  
    //this.cards2 = Array.from(Array(6).keys(), x => x + x);
  }

  ngOnInit(): void {
  }

}
