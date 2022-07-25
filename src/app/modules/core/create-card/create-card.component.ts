import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GameService } from 'src/app/shared/services/game.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.sass']
})
export class CreateCardComponent implements OnInit {

  @Input()
  displayStyle: string = 'none';

  @Input()
  image: string = '';

  @Input()
  title: string = '';

  @Output() modalStatus = new EventEmitter<any>();
  display !: string;

  imageurl  : string = "./../../../../assets/img/marvel-cards/";
  cardForm! : FormGroup;
  constructor(private service: GameService, private formGroup: FormBuilder,) {
    this.cardForm = this.formGroup.group({
      poder: new FormControl(0, [Validators.required]),
      descripcion: new FormControl("", [Validators.required]),
    });
   }

  ngOnInit(): void {    
  }

  createCard() : void {
      let card : Card = {
        image : this.image,
        power : this.cardForm.get("poder")?.value,
        description : this.cardForm.get("descripcion")?.value
      }

      console.log(card);
      
      this.service.createCard(card).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (error) => {
          console.error(error);
        }
      })
  }

  
  closePopup():void {
    this.modalStatus.emit({display : "none"});
  }

}


interface Card {
  image : string,
  power : number,
  description : string
}
