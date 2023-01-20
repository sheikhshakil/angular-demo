import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {

  //view model
  hero: Hero = {
    id: 0,
    name: '',
    rating: 0,
  };
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private logService: LogService) {} //Dependency injection

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.logService.log('Our heroes are => ', heroes);
      this.heroes = heroes;
    });
  }

  addHero(): void {
    //we create a new object from model values, because using model directly doesn't hold old values
    this.heroes.push({
      id: this.heroes.length + 1,
      name: this.hero.name,
      rating: this.hero.rating,
    });
    this.logService.log("Hero added!", '');
  }

  selectedHero?: Hero;
  onSelectHero(hero: Hero) {
    this.selectedHero = hero;
    this.logService.log('Selected hero => ', hero);
  }
}
