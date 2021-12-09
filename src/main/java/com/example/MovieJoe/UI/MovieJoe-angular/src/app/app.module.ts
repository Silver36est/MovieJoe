import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RandomMovieComponent } from './random-movie/random-movie.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import { UserHomeComponent } from './user-home/user-home.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { UserItemComponent } from './user-item/user-item.component';
import { AddMovieComponent } from './add-movie/add-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RandomMovieComponent,
    UserHomeComponent,
    MovieItemComponent,
    UserItemComponent,
    AddMovieComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
