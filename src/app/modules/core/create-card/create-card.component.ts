import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GameService } from 'src/app/shared/services/game.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.sass']
})
export class CreateCardComponent implements OnInit {

  @Input()
  showModalBox: boolean = false;

  @Input()
  image: string = '';

  cardForm!: FormGroup;
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

      this.service.createCard(card).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (error) => {
          console.error(error);
        }
      })
  }

}


interface Card {
  image : string,
  power : number,
  description : string
}
