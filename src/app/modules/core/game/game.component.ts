import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  //cards1 : Observable<number[]> = [];
  cards1 : Array<number> = [];
  cards2 : Array<number> = [];
  constructor() { 
    this.cards1 = Array.from(Array(6).keys());  
    //this.cards2 = Array.from(Array(6).keys(), x => x + x);
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<number[]>):void{
    //transfer
    console.log(event);
    
  }

}
