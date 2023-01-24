import {NgModule} from '@angular/core';
import {<%= nombreMayuscula %>TablaComponent} from "./<%= nombreGuiones %>-tabla.component";
import {TableModule} from "primeng/table";

@NgModule({
    declarations: [
        <%= nombreMayuscula %>TablaComponent
    ],
    exports: [
        <%= nombreMayuscula %>TablaComponent
    ],
    providers: [],
    imports: [
        TableModule,
        ...SharedImportsTablaMovil
    ]
})
export class <%= nombreMayuscula %>TablaModule {
}
