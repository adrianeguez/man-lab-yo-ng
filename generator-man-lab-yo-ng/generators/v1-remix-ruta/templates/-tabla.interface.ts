import {<%= nombreMayuscula %>Interface} from "~/http/<%= nombreGuiones %>/<%= nombreGuiones %>.interface";
import {<%= nombreMayuscula %>MostrarEnum} from "~/components/<%= nombreGuiones %>/enums/<%= nombreGuiones %>-mostrar.enum";

export interface <%= nombreMayuscula %>TablaInterface {
    registros: <%= nombreMayuscula %>Interface[];
    dioClicBoton?: (registro: <%= nombreMayuscula %>Interface,
                    nombreEvento: <%= nombreMayuscula %>MostrarEnum) => void;
}