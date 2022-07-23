import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {

  cards       : Array<number> = [];
  imageurl    : String = "./../../../../assets/img/marvel cards/";
  buttonText  : String = "Cartas Creadas";
  title       : String = "Escoge la imagen de tu Carta"
  createCards : boolean = true

  constructor() {
    this.cards = Array.from(Array(108).keys());  
   }

  ngOnInit(): void {
  }

  changeView(){
    if(this.createCards){

      this.createCards = false;
      this.buttonText = "Crear Carta";
      this.title      = "Cartas Creadas";
      
    } else {

      this.createCards = true;
      this.buttonText = "Cartas Creadas";
      this.title      = "Escoge la imagen de tu Carta";
    }
  }

}
