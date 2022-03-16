import {CommonModule} from '@angular/common';
import {<%= nombreMayuscula %>RoutingModule} from '../<%= nombreGuiones %>-routing.module';
import {<%= nombreMayuscula %>PerfilModule} from '../componentes/<%= nombreGuiones %>-perfil/<%= nombreGuiones %>-perfil.module';
import {<%= nombreMayuscula %>TablaModule} from '../componentes/<%= nombreGuiones %>-tabla/<%= nombreGuiones %>-tabla.module';
import {Http<%= nombreMayuscula %>Module} from '../servicios/http-<%= nombreGuiones %>-module';
import {MatCardModule} from '@angular/material/card';

export const <%= nombreSoloMayusculas %>_IMPORTS = [
  CommonModule,
  <%= nombreMayuscula %>RoutingModule,
  <%= nombreMayuscula %>PerfilModule,
  <%= nombreMayuscula %>TablaModule,
  Http<%= nombreMayuscula %>Module,
  RouteHeaderModule,
  MatCardModule,
]
