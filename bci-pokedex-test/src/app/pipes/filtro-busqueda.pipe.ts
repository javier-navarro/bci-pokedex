import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroBusqueda'
})
export class FiltroBusquedaPipe implements PipeTransform {

  transform(value: any, arg: any): any {

    const resultadoBusqueda = [];
    for (const pokemon of value){
      if (pokemon.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
       resultadoBusqueda.push(pokemon);
      }
    }
    return resultadoBusqueda;
  }

}
