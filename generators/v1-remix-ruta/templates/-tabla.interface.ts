import {<%= nombreMayuscula %>Class} from "~/http/<%= nombreGuiones %>/<%= nombreGuiones %>.class";
import {<%= nombreMayuscula %>MostrarEnum} from "~/components/<%= nombreGuiones %>/enums/<%= nombreGuiones %>-mostrar.enum";

export interface <%= nombreMayuscula %>TablaInterface {
    registros: <%= nombreMayuscula %>Class[];
    dioClicBoton?: (registro: <%= nombreMayuscula %>Class,
                    nombreEvento: <%= nombreMayuscula %>MostrarEnum) => void;
}