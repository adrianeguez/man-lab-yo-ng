import { NgModule } from '@angular/core';
import {SRuta<%= nombreMayuscula %>Module} from './ruta/ruta-<%= nombreGuiones %>/s-ruta-<%= nombreGuiones %>/s-ruta-<%= nombreGuiones %>.module';
import {<%= nombreMayuscula %>Module} from './servicios/<%= nombreGuiones %>/<%= nombreGuiones %>.module';
import {Ruta<%= nombreMayuscula %>Component} from './ruta/ruta-<%= nombreGuiones %>/ruta-<%= nombreGuiones %>.component';
import {Mostrar<%= nombreMayuscula %>ListaModule} from './componentes/mostrar-<%= nombreGuiones %>-lista/mostrar-<%= nombreGuiones %>-lista.module';
    import {<%= nombreMayuscula %>PageRoutingModule} from './<%= nombreGuiones %>-page-routing.module';

@NgModule({
    imports: [
        <%= nombreMayuscula %>PageRoutingModule,
        <%= nombreMayuscula %>Module,
        SRuta<%= nombreMayuscula %>Module,
        Mostrar<%= nombreMayuscula %>ListaModule,
        ...IMPORTS_COMUNES_MODULOS
    ],
    declarations: [
        Ruta<%= nombreMayuscula %>Component,
    ]
})
export class <%= nombreMayuscula %>PageModule {}
