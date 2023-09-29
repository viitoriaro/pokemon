import { Component } from '@angular/core';
import { Pokemon } from 'src/modules/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex_';
  logo= "../assets/logo.png";
  imgProfile: string = "../assets/photoPerfil.jpg";
  links: string [] = ['Home', 'Pokedex', 'Video Game', 'Card Games', 'Eventos'];
  pokemons: Pokemon[] = [
    new Pokemon(1, 'Pikachu', ['Elétrico'], 'Esse é o Pikachu', '../assets/pikachu.jpg'),
    new Pokemon(2, 'Bulbasaur', ['Grama', 'Veneno'], 'Este é o Bulbasaur', '../assets/bulbasaur.jpg'),
    new Pokemon(1, 'Ivysaur', ['Fogo'], 'Este é o Ivysaur', '../assets/ivysaur.jpg'),
    new Pokemon(2, 'Geodude', ['Pedra'], 'Este é o Geodude', '../assets/geodude.jpg'),
  ];
  selectdPokemon?: Pokemon;

  showDetails(pokemon: Pokemon) {
    this.selectdPokemon = pokemon;
  }

  closeModal() {
    this.selectdPokemon = undefined;
  }

  filterValue: string = '';
  filteredPokemon(): Pokemon[] {
    if (!this.filterValue) {
      return this.pokemons;
    }
    return this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.filterValue.toLowerCase()))
  }

}

