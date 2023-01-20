import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';
import * as globals from 'src/app/global';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  llegadaPokemones: any;
  filtroPokemon: string = '' ;
  spinnerConsultaPokemones: boolean = true;
  mensajesErrores = globals.mensajesEror;
  mensajeErrorConsultaPokemones: string = '';
  constructor(private pokemonServiceService:PokemonServiceService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.llegadaPokemones = this.pokemonServiceService.obtenerDataHome();
      console.log(this.llegadaPokemones);
      
      if(this.llegadaPokemones.length <= 0){
        this.mensajeErrorConsultaPokemones = this.mensajesErrores.CONSULTA_POKEMONES_VACIA;
      }
      this.spinnerConsultaPokemones = false;
    }, 3000);
    
  }

}
