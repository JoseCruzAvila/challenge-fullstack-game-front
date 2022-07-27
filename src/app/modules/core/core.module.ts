import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreRoutingModule } from './core-routing.module'
import { LandingModule } from "./../landing/landing.module";
import { CardsComponent } from './cards/cards.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';
import { RouterModule } from '@angular/router';
import { DragDropModule } from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent,
    CreateCardComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    LandingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DragDropModule
  ]
})
export class CoreModule { }
