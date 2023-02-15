import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Ruta<%= nombreMayuscula %>Component} from './rutas/ruta-<%= nombreGuiones %>/ruta-<%= nombreGuiones %>.component';

const routes: Routes = [
  {
    component: Ruta<%= nombreMayuscula %>Component,
    path: '<%= nombreGuiones %>'
  },
  {
    path: '',
    redirectTo: '<%= nombreGuiones %>',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class <%= nombreMayuscula %>RoutingModule {
}
