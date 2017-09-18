import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from '../guards/auth.guard';

import {LoginComponent} from '../login/login.component';
import {FourOFourComponent} from '../fourOfour/fourOfour.component';
import {RegisterComponent} from '../register/register.component';
import {HomeComponent} from '../home/home.component';
import {GameComponent} from '../game/game.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'game', component: GameComponent},
  {path: '404', component: FourOFourComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routableComponents = [
  LoginComponent,
  RegisterComponent,
  HomeComponent,
  GameComponent,
  FourOFourComponent
];
