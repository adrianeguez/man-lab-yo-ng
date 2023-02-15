import {NgModule} from '@angular/core';
import {Perfil<%= nombreMayuscula %>Component} from './perfil-<%= nombreGuiones %>.component';

@NgModule({
  imports: [...IMPORTS_COMUNES_MODULOS],
  declarations: [Perfil<%= nombreMayuscula %>Component],
  exports: [Perfil<%= nombreMayuscula %>Component],
})
export class Perfil<%= nombreMayuscula %>Module {
}
