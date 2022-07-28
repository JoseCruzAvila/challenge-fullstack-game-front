import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LandingGuard } from './auth/landing.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [LandingGuard],
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'game', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/core/core.module').then(m => m.CoreModule)
  },
  {
    path: '**', 
    pathMatch: 'full', 
    redirectTo:'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
