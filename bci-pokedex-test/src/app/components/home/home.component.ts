import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';
import * as globals from 'src/app/global';
import Swal from 'sweetalert2';
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
  page: number = 1;
  constructor(private pokemonServiceService:PokemonServiceService) { }

  ngOnInit(): void {
    this.mensajeErrorConsultaPokemones = 
          this.mensajesErrores.CONSULTA_POKEMONES_VACIA + ', '+this.mensajesErrores.REINTENTAR_CONSULTA;
          
    setTimeout(() => {
      this.llegadaPokemones = this.pokemonServiceService.obtenerDataHome();
      if(this.llegadaPokemones.length <= 0){
        this.alertaConsultaSinDatos();
      }
      this.spinnerConsultaPokemones = false;
    }, 3000);
    
  }

  alertaConsultaSinDatos(): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      icon: 'error',
      title: this.mensajeErrorConsultaPokemones,
      text: this.mensajesErrores.REINTENTAR_CONSULTA,
    });
  }

}
