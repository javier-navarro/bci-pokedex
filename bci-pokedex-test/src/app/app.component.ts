
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
  arregloPokemones: any = [];
  constructor(private pokemonServiceService:PokemonServiceService){
    
  }

  ngOnInit(): void {
    this.getlistaPokemones();
  }

  getlistaPokemones(): any {
    this.pokemonServiceService.getAllPokemones().
      subscribe((lista: any) => {
        this.listaPokemones = lista.results;
        this.pokemonServiceService.dataHome = this.listaPokemones;
        console.log(this.listaPokemones);
        if(this.listaPokemones === undefined){
          this.listaPokemones = [];
          this.pokemonServiceService.dataHome = this.listaPokemones
        }else {
          this.listaPokemones.forEach((element: any, index: any) => {
            element['id'] = index + 1;
            this.pokemonServiceService.dataHome = this.listaPokemones;
          });
        }
        
      }, () =>{
        this.listaPokemones = [];
        this.pokemonServiceService.dataHome = this.listaPokemones
      })
  }

  botonBienvenida(): void {
   // Swal.fire('notificacion simple');
  }
}
