import {<%= nombreMayuscula %>Interface} from "~/http/<%= nombreGuiones %>/<%= nombreGuiones %>.interface";
import {<%= nombreMayuscula %>MostrarEnum} from "~/components/<%= nombreGuiones %>/enums/<%= nombreGuiones %>-mostrar.enum";

export interface <%= nombreMayuscula %>MostrarInterface {
    registro: <%= nombreMayuscula %>Interface;
    dioClicBoton?: (registro: <%= nombreMayuscula %>Interface,
                    nombreEvento: <%= nombreMayuscula %>MostrarEnum) => void;
}