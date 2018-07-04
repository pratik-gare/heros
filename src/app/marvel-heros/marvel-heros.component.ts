import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel-heros',
  templateUrl: './marvel-heros.component.html',
  styleUrls: ['./marvel-heros.component.css']
})
export class MarvelHerosComponent implements OnInit {

  heros = ['Iron Man', 'Spiderman', 'Black Panther', 'Ant Man'];

  //property binding
  btnDisabled = false;

  inputHero = null;

  Adding = false;

  AddHero() {
    this.heros.push(this.inputHero);
    this.inputHero = null;
    this.Adding = false;
  }

  AddMore() {
    this.Adding = !this.Adding;
  }

  constructor() { }

  ngOnInit() {
  }

}
