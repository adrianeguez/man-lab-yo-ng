import {NgModule} from '@angular/core';
import {PerfilPokemonComponent} from './perfil-pokemon.component';

@NgModule({
  imports: [...IMPORTS_COMUNES_MODULOS],
  declarations: [PerfilPokemonComponent],
  exports: [PerfilPokemonComponent],
})
export class PerfilPokemonModule {
}
