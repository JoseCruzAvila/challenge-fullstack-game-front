import { Component, OnInit, ViewChild } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {

  cardsToCreate : Array<number> = [];
  cards       : Array<any> = [];
  imageurl    : string = "./../../../../assets/img/marvel cards/";
  buttonText  : String = "";
  title       : String = ""
  createCards : boolean = true;
  imageUrlComplete: string = '';
  displayStyle: string = "none";
  modalTitle: string = "Completa tu carta";

  constructor( private service: GameService) {
    this.getCardsCreated();
    this.changeView();
   }

  ngOnInit(): void {
    
    this.cardsToCreate = Array.from(Array(108).keys());  
  }

  changeView() : void{
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

  validCardsCreated() : void{
    this.cards.forEach(element => {
      this.cardsToCreate = this.cardsToCreate.filter( card => card != element.image);
    });
  }

  getCardsCreated() : void{
    this.service.getCards().subscribe({
      next: (res) => {
        this.cards = res.sort((a: any, b: any) => {
          if (a.image > b.image) {
            return -1;
          }
          return 1;
        });
        this.validCardsCreated();
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  
  openPopup(card:number, num:number) {   
    this.modalTitle = num ===2 ? 'Edita tu tarjeta' : 'Completa tu carta'; 
    this.imageUrlComplete = card.toString();
    this.displayStyle = "block";
  }

  closePopup(event : any):void {
    this.displayStyle = event.display;
  }


}
