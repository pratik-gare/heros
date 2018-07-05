import { Component, OnInit } from '@angular/core';
import { HeroService } from './marvel-hero.service';

@Component({
  selector: 'app-marvel-heros',
  templateUrl: './marvel-heros.component.html',
  styleUrls: ['./marvel-heros.component.css'],
  providers: [HeroService]
})
export class MarvelHerosComponent implements OnInit {

  //property binding
  btnDisabled = false;

  inputHero = null;

  Adding = false;

  //service
  heros:string[];

  AddHero() {
    this.heros.push(this.inputHero);
    this.inputHero = null;
    this.Adding = false;
  }

  AddMore() {
    this.Adding = !this.Adding;
  }

  // dependency injection
  constructor(private ajax: HeroService) {
    this.heros = this.ajax.heros;
  }

  ngOnInit() {
  }

}
