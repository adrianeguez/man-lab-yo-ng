import {NgModule} from '@angular/core';
import {Mostrar<%= nombreMayuscula %>ListaComponent} from './mostrar-<%= nombreGuiones %>-lista.component';
import {Perfil<%= nombreMayuscula %>Module} from '../perfil-<%= nombreGuiones %>/perfil-<%= nombreGuiones %>.module';

@NgModule({
  imports: [
    ...IMPORTS_COMUNES_MODULOS,
    Perfil<%= nombreMayuscula %>Module,
  ],
  declarations: [Mostrar<%= nombreMayuscula %>ListaComponent],
  exports: [Mostrar<%= nombreMayuscula %>ListaComponent],
})
export class Mostrar<%= nombreMayuscula %>ListaModule {
}
