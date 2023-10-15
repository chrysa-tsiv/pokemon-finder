import { Component, HostListener, Input, OnInit, SimpleChanges } from '@angular/core';
import { ContentService } from './content.service';
import { PokemonList } from 'src/app/models/pokemon.list';
import { PokemonDetail } from 'src/app/models/pokemon.detail';
import { Observable, forkJoin } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() isMobileView: boolean;
  limit: number = 24;
  pokemons: PokemonDetail[] = [];
  contentClass: string;
  contentWrapperClass: string;
  contentHeaderClass: string = 'content-header';

  constructor(private pokemonService: ContentService) { }

  ngOnInit(): void {
    this.getPage();
    this.setClass();
  }

  // on init get list of pokemons
  getPage() {
    this.pokemonService.getPokemonList(this.limit)
      .subscribe((list: PokemonList[]) => {
        this.getPokemon(list);
      });
  }

  // get pokemon details into pokemons array by pokemon name
  private getPokemon(list: PokemonList[]) {
    const arr: Observable<PokemonDetail>[] = [];
    list.map((value: PokemonList) => {
      arr.push(
        this.pokemonService.getPokemonDetail(value.name)
      );
    });

    forkJoin([...arr]).subscribe((pokemons) => {
      this.pokemons.push(...pokemons);
    })
  }

  // when user selects a number from the dropdown, the limit changes and the call is sent again
  receiveLimit($event: number) {
    this.limit = Number($event);
    this.pokemons = [];
    this.getPage();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setClass();
  }

  setClass() {
    if (this.isMobileView) {
      this.contentClass = 'content-mobile';
      this.contentWrapperClass = 'content-wrapper-mobile';
      this.contentHeaderClass = '';
    } else {
      this.contentClass = 'content';
      this.contentWrapperClass = 'content-wrapper';
      this.contentHeaderClass = 'content-header';
    }
  }

}
