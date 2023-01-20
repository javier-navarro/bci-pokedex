import { Component, Input, OnInit } from '@angular/core';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  llegadaPokemones: any;
  filtroPokemon: string = '' ;
  constructor(private pokemonServiceService:PokemonServiceService) { }

  ngOnInit(): void {
    this.llegadaPokemones = this.pokemonServiceService.obtenerDataHome();
  }

}
