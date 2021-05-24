import {NgModule} from '@angular/core';
import {MostrarPokemonListaComponent} from './mostrar-pokemon-lista.component';
import {PerfilPokemonModule} from '../perfil-pokemon/perfil-pokemon.module';

@NgModule({
  imports: [
    ...IMPORTS_COMUNES_MODULOS,
    PerfilPokemonModule,
  ],
  declarations: [MostrarPokemonListaComponent],
  exports: [MostrarPokemonListaComponent],
})
export class MostrarPokemonListaModule {
}
