import {RutaParametrosComun} from '@manticore-labs/ng-2021';

export interface SRutaPokemonParametros extends RutaParametrosComun {
    id?: string; 
    // nombreCampo?: string; // Todos los campos deben ser STRING o ENUMS DE TIPO STRING
    
    // Normalmente es TODOS los que estén en el archivo PokemonBusquedaDto
    // nombreCampoRelacion?: string;
    
    
    // Si hay colecciones superiores en la ruta se las pone aqui
    // nombreCampoColeccionSuperior?: string;
    
}
