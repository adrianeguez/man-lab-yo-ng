import {<%= nombreMayuscula %>HttpModule} from "../../servicios/<%= nombreGuiones %>/http/<%= nombreGuiones %>.http.module";
import {
    <%= nombreMayuscula %>TablaMovilModule
} from "../../componentes/<%= nombreGuiones %>/<%= nombreGuiones %>-tabla-movil/<%= nombreGuiones %>-tabla-movil.module";
import {
    <%= nombreMayuscula %>TablaModule
} from "../../componentes/<%= nombreGuiones %>/<%= nombreGuiones %>-tabla/<%= nombreGuiones %>-tabla.module";
import {<%= nombreMayuscula %>FormsModule} from "../../servicios/<%= nombreGuiones %>/forms/<%= nombreGuiones %>.forms.module";

export const Ruta<%= nombreMayuscula %>Imports = [
    <%= nombreMayuscula %>HttpModule,
    <%= nombreMayuscula %>TablaMovilModule,
    <%= nombreMayuscula %>TablaModule,
    <%= nombreMayuscula %>FormsModule
];
