
import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from './services/pokemon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bci-pokedex-test';
  listaPokemones: any;
  constructor(private pokemonServiceService:PokemonServiceService){
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getlistaPokemones();
  }

  getlistaPokemones(): any {
    this.pokemonServiceService.getAllPokemones().
      subscribe((lista: any) => {
        this.listaPokemones = lista;
        console.log(this.listaPokemones);
      })
  }
}
