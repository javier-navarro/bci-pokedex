
import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from './services/pokemon-service.service';
import * as dataSinConexion from 'src/app/mocks';
import Swal from 'sweetalert2';
import * as globals from 'src/app/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bci-pokedex-test';
  listaPokemones: any;
  arregloPokemones: any = [];
  arregloPokemonesSinConexion = dataSinConexion.DATA_SIN_CONEXION;
  spinnerConsultaPokemones: boolean = true;
  mensajesErrores = globals.mensajesEror;

  constructor(private pokemonServiceService:PokemonServiceService){ 
  }

  ngOnInit(): void {
    this.getlistaPokemones();
  }

  getlistaPokemones(): any {
    this.pokemonServiceService.getAllPokemones().
      subscribe((lista: any) => {
        this.spinnerConsultaPokemones = false;
        this.listaPokemones = lista.results;
        this.pokemonServiceService.dataHome = this.listaPokemones;
        console.log(this.listaPokemones);
        if(this.listaPokemones === undefined){
          this.alertaPokemonesSinConexion();
          this.listaPokemones = this.arregloPokemonesSinConexion.results;
          this.listaPokemones.forEach((element: any, index: any) => {
            element['id'] = index + 1;
            this.pokemonServiceService.dataHome = this.listaPokemones;
          });
        }else {
          this.listaPokemones.forEach((element: any, index: any) => {
            element['id'] = index + 1;
            this.pokemonServiceService.dataHome = this.listaPokemones;
          });
        }
        
      }, () =>{
        this.spinnerConsultaPokemones = false;
        this.alertaPokemonesSinConexion();
        this.listaPokemones = this.arregloPokemonesSinConexion.results;
        this.listaPokemones.forEach((element: any, index: any) => {
          element['id'] = index + 1;
          this.pokemonServiceService.dataHome = this.listaPokemones;
        });
      })
  }

  alertaPokemonesSinConexion(): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      icon: 'info',
      title: this.mensajesErrores.CONSULTA_POKEMONES_VACIA,
      text: this.mensajesErrores.CARGA_DATA_SIN_CONEXION,
    });
  }
}
