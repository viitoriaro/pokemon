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
    new Pokemon(1, 'Pikachu', ['Elétrico'], 'Pikachu é um Pokémon elétrico amarelo com orelhas pontudas e cauda em forma de raio. Suas bochechas vermelhas indicam eletricidade. Evolui de Pichu com alta amizade e para Raichu com uma Thunder Stone.', '../assets/pikachu.jpg','../assets/'),

    new Pokemon(2, 'Bulbasaur', ['Grama', 'Veneno'], 'Bulbasaur é um Pokémon do tipo Grama/Venenoso com um brotinho nas costas que se desenvolve em uma flor. Possui olhos grandes, pelagem azul-verde e pernas fortes. Evolui para Ivysaur e, posteriormente, para Venusaur. ', '../assets/bulbasaurdois.webp','../assets/Bulbasaurum.jpg'),

    new Pokemon(1, 'Ivysaur', ['Fogo'], 'Ivysaur é a segunda forma na evolução de Bulbasaur para Venusaur. Mantendo o tipo Grama/Venenoso, destaca-se pela flor mais desenvolvida em suas costas. Fisicamente maior e mais pesado que Bulbasaur, Ivysaur possui poder de ataque aprimorado e é uma etapa intermediária na linha evolutiva. .', '../assets/ivysaur.jpg','../assets/Bulbasaurum.jpg'),

    new Pokemon(2, 'Geodude', ['Pedra'], 'Geodude é um Pokémon do tipo Rocha/Terrestre com um corpo rochoso, braços musculosos e olhos expressivos. Ele flutua no ar ou rola usando seus braços para se movimentar, não tendo pernas. Faz parte de uma linha evolutiva que inclui Graveler e Golem, evoluindo para Graveler em um certo nível. ', '../assets/geodude.jpg','../assets/Geodudeum.gif'),

    new Pokemon(1,'charmander',['Fogo'],'Charmander é um Pokémon do tipo Fogo com a aparência de um pequeno lagarto e uma chama na ponta da cauda. Sua chama indica sua saúde e energia. Faz parte de uma linha evolutiva que inclui Charmeleon e Charizard, evoluindo para Charmeleon em um certo nível. ','../assets/charmander.jpg','../assets/charmandedois.jpg'),

    new Pokemon(2,'charmeleon',['Fogo'],'Charmeleon é a segunda forma evolutiva após Charmander, no caminho para se tornar Charizard. Este Pokémon do tipo Fogo exibe uma aparência mais robusta e dragônica, com uma chama na cauda que queima mais intensamente.  ','../assets/charmeleon.png', '../assets/charmeleondois.jpg'),

    new Pokemon(1,'charizard',['Fogo','Voador'],'Este é o charizard','../assets/charizard.png', ''),

    new Pokemon(2,'squirtle',['Água'],'Este é o squirtle','../assets/squirtle.png', ''),

    new Pokemon(1,'wartortle',['Água'],'Este é o wartortle','../assets/wartortle.png',''),

    new Pokemon(2,'blastoise',['Água'], 'Este é o blastoise','../assets/blastoise.png', ''),
    new Pokemon(1,'caterpie',['Inseto'], 'Este é o caterpie','../assets/caterpie.png', ''),
    new Pokemon(2,'metapod',['Inseto'], 'Este é o metapod','../assets/metapod.jpg', ''),
    new Pokemon(1,'butterfree',['Inseto','Voador'],'Este é o butterfree','../assets/butterfree.png', ''),
    new Pokemon(2,'weedle',['Inseto'],'Este é o weedle','../assets/weedle.png', ''),
    new Pokemon(1,'kakuna',['Inseto','Veneno'],'Este é o kakuna','../assets/kakuna.png', ''),
    new Pokemon(2,'beedrill',['Inseto','Voador'],'Este é o beedrill','../assets/beedrill.png', ''),
    new Pokemon(1,'pidgey',['Normal','Voador'],'Este é o pidgey','../assets/pidgey.jpg', ''),
    new Pokemon(2,'pidgeotto',['Normal','Voador'],'Este é o pidgeotto','../assets/pidgeotto.jpg',''),
    new Pokemon(1,'rattata',['Rato'],'Este é o rattata','../assets/rattata.webp',''),
    new Pokemon(2,'spearow',['Normal','Voador'],'Este é o spearow','../assets/spearow.jpg', ''),
    new Pokemon(1,'fearow',['Normal','Voador'],'Este é o fearow','../assets/fearow.jpg', ''),
  ];
  selectedPokemon?: Pokemon;

  showDetails(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }

  closeModal() {
    this.selectedPokemon = undefined;
  }

  filterValue: string = '';
  filteredPokemon(): Pokemon[] {
    if (!this.filterValue) {
      return this.pokemons;
    }
    return this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.filterValue.toLowerCase()))
  }

}

