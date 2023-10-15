import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonList } from '../../models/pokemon.list';
import { PokemonDetail } from '../../models/pokemon.detail';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  // call to get list of pokemons with default limit at 24
  getPokemonList(limit: number): Observable<PokemonList[]> {
    return this.http.get<PokemonList[]>(this.baseUrl + 'pokemon?limit=' + limit)
      .pipe(
        map((x: any) => x.results)
      );
  }

  // call to get pokemon details for each pokemon of the above list
  getPokemonDetail(pokemon: number | string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(this.baseUrl + 'pokemon/' + pokemon);
  }
}
