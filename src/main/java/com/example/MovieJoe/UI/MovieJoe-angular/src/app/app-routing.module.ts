import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RandomMovieComponent} from "./random-movie/random-movie.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {UserHomeComponent} from "./user-home/user-home.component";

const routes: Routes = [
  {path: '', component: RandomMovieComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: UserHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
