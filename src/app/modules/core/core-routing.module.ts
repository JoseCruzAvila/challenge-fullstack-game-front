import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from "./cards/cards.component";
import { GameComponent } from "./game/game.component";
import { AdminGuard } from 'src/app/auth/admin.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cards',
    canActivate: [AdminGuard],
    component: CardsComponent
  },
  {
    path: 'fight',
    component: GameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
