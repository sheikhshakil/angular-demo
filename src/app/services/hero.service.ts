import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from '../data/mock-heroes';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService { //service will get data from API
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    console.log('HeroService called!')
    const heroes = of(HEROES)
    return heroes;
  }
}
