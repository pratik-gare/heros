import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel-heros',
  templateUrl: './marvel-heros.component.html',
  styleUrls: ['./marvel-heros.component.css']
})
export class MarvelHerosComponent implements OnInit {

  hero = 'Iron Man';

  //property binding
  btnDisabled = false;

  inputHero = null;

  ChangeHero(){
    this.hero = this.inputHero;
    this.inputHero = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
