import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarvelHerosComponent } from './marvel-heros/marvel-heros.component';

import { FormsModule } from '@angular/forms';
import { DcComicsComponent } from './dc-comics/dc-comics.component'

import { RouterModule, Routes } from '@angular/router';


const routeLists: Routes = [
  {
    path: "", component: DcComicsComponent
  },
  {
    path: "marvels", component: MarvelHerosComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MarvelHerosComponent,
    DcComicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeLists)
  ],
  providers: [],

  // starts from here
  // then app.component takes over
  bootstrap: [AppComponent]
})
export class AppModule { }
