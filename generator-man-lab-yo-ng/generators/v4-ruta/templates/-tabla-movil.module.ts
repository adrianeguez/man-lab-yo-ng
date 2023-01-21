import {NgModule} from '@angular/core';
import {<%= nombreMayuscula %>TablaMovilComponent} from "./<%= nombreGuiones %>-tabla-movil.component";
import {CardModule} from 'primeng/card';

@NgModule({
    declarations: [
        <%= nombreMayuscula %>TablaMovilComponent
    ],
    exports: [
        <%= nombreMayuscula %>TablaMovilComponent
    ],
    providers: [],
    imports: [
        ...SharedImportsTablaMovil,
        CardModule
    ]
})
export class <%= nombreMayuscula %>TablaMovilModule {
}
