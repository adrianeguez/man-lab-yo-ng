import { NgModule } from '@angular/core';
import {SRutaPokemonModule} from './ruta/ruta-pokemon/s-ruta-pokemon/s-ruta-pokemon.module';
import {PokemonModule} from './servicios/pokemon/pokemon.module';
import {RutaPokemonComponent} from './ruta/ruta-pokemon/ruta-pokemon.component';
import {MostrarPokemonListaModule} from './componentes/mostrar-pokemon-lista/mostrar-pokemon-lista.module';
    import {PokemonPageRoutingModule} from './pokemon-page-routing.module';

@NgModule({
    imports: [
        PokemonPageRoutingModule,
        PokemonModule,
        SRutaPokemonModule,
        MostrarPokemonListaModule,
        ...IMPORTS_COMUNES_MODULOS
    ],
    declarations: [
        RutaPokemonComponent,
    ]
})
export class PokemonPageModule {}
