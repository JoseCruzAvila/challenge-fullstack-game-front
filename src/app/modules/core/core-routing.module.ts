import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from "./cards/cards.component";
import { GameComponent } from "./game/game.component";
import { AuthGuard } from './../../auth/auth.guard';

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
    canActivate: [AuthGuard],
    data:{ }
  },
  {
    path: 'fight',
    component: GameComponent,
    data:{ }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
