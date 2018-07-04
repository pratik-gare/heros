import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarvelHerosComponent } from './marvel-heros/marvel-heros.component';

import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    MarvelHerosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],

  // starts from here
  // then app.component takes over
  bootstrap: [AppComponent]
})
export class AppModule { }
