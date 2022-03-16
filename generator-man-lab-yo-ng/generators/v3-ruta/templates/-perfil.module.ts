import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {<%= nombreMayuscula %>PerfilComponent} from './<%= nombreGuiones %>-perfil.component';


@NgModule({
  declarations: [
    <%= nombreMayuscula %>PerfilComponent
  ],
  exports: [
    <%= nombreMayuscula %>PerfilComponent
  ],
  imports: [
    CommonModule,
    ListInfoModule
  ]
})
export class <%= nombreMayuscula %>PerfilModule {
}
