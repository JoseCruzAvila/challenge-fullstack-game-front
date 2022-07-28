import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CardService } from 'src/app/shared/services/card.service';

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

  @Input()
  info: any;

  @Output() modalStatus = new EventEmitter<any>();
  display !: string;
  
  poder : string = '';
  descripcion : string = '';
  cardForm! : FormGroup;
  constructor(private service: CardService, private formGroup: FormBuilder,) {
    
    this.cardForm = this.formGroup.group({
      poder: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
    });
       
   }

  ngOnChanges(){
    this.poder = this.info != null ? this.info.power : '0';
    this.descripcion = this.info != null ? this.info.description : '';

    this.cardForm.get('poder')?.setValue('');
    this.cardForm.get('descripcion')?.setValue('');
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
          this.closePopup();
        },
        error: (error) => {
          console.error(error);
        }
      })
  }


  updateCard(): void {
    let card : Card = {
      id : this.info.id,
      image : this.image,
      power : this.cardForm.get("poder")?.value != '' ? this.cardForm.get("poder")?.value : this.poder,
      description : this.cardForm.get("descripcion")?.value != '' ? this.cardForm.get("descripcion")?.value : this.descripcion
    }

    this.service.updateCard(card).subscribe({
      next: (res) => {
        this.closePopup();
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
  id ?: string,
  image : string,
  power : number,
  description : string
}
