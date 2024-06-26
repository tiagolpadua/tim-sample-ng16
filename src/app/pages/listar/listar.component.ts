import { Component, OnInit } from '@angular/core';
import { IPokemonBase, PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  pokemons?: IPokemonBase[];

  constructor(private _pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this._pokemonService.listar().subscribe(pokemons =>
      this.pokemons = pokemons);
  }
}
