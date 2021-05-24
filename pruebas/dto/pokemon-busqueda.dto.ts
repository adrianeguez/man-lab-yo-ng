
import {Expose} from 'class-transformer';

export class PokemonBusquedaDto extends BusquedaComunProyectoDto {
    
    @Expose()
    id?: number; // no es necesario igualar a undefined
    
    // A los campos de busqueda se los iguala a undefined EXCEPTO
    // a los campos que son seteados en los parametros de ruta
    // NO SE DEBE DE AGREGAR TODOS LOS CAMPOS, SOLO LOS QUE SE VAN TENER EN EL FORMULARIO DE BUSQUEDA
    // @Expose()
    // nombreCampo?: string = undefined; // Si esta en formulario SE iguala a undefined
    // @Expose()
    // nombreCampoRelacion?: number; // Si no esta en formulario NO se iguala a undefined
}
