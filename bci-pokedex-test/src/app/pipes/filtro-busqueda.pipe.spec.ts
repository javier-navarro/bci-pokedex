import { FiltroBusquedaPipe } from "./filtro-busqueda.pipe";
import * as mock from 'src/app/mocks';

describe('FiltroBusquedaPipe', () => {

    it('creacion del componente', () => {
        const pipe = new FiltroBusquedaPipe();
        expect(pipe).toBeTruthy();
    });

    it('test', () => {
        const nombre = mock.DATA_SIN_CONEXION.results;
        const busqueda = [ Object({ name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/', id: 4 }) ];
        const pipe = new FiltroBusquedaPipe();
        const transform = pipe.transform(nombre,'charmander');
        expect(transform).toEqual(busqueda);
    });


});