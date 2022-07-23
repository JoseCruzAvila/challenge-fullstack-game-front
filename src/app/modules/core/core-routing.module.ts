import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from "./cards/cards.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data:{
      requiresLogin: true
    }
  },
  {
    path: 'cards',
    component: CardsComponent,
    data:{ }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
