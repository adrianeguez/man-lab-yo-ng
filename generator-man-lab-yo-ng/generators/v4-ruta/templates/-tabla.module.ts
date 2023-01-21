import {NgModule} from '@angular/core';
import {<%= nombreMayuscula %>TablaComponent} from "./<%= nombreGuiones %>-tabla.component";
import {TableModule} from "primeng/table";
import {ClrIconModule} from "@clr/angular";
@NgModule({
    declarations: [
        <%= nombreMayuscula %>TablaComponent
    ],
    exports:[
        <%= nombreMayuscula %>TablaComponent
    ],
    providers: [
    ],
    imports: [
        TableModule,
        ClrIconModule,
        ...SharedImportsTablaMovil
    ]
})
export class <%= nombreMayuscula %>TablaModule {
}
