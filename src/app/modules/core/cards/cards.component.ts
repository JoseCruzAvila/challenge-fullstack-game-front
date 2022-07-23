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
  buttonText  : String = "Cartas Creadas";
  title       : String = "Escoge la imagen de tu Carta"
  createCards : boolean = true
  showModalBox: boolean = false;

  constructor( private service: GameService) {
    this.getCardsCreated();
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

  modalOpen(): void {
    console.log('sisas');
    
    this.showModalBox = !this.showModalBox ? true : false;
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

}
