import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreRoutingModule } from './core-routing.module'
import { LandingModule } from "./../landing/landing.module";
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    LandingModule
  ]
})
export class CoreModule { }
