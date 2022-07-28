import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
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

}
