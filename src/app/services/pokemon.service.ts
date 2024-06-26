import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface IAPIResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[]
}

export interface IPokemonBase {
  name: string,
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _httpClient: HttpClient) { }

  listar(): Observable<IPokemonBase[]> {
    return this._httpClient.get<IAPIResponse<IPokemonBase>>('https://pokeapi.co/api/v2/pokemon')
      .pipe(map(response => response.results));
  }
}
