import {<%= nombreMayuscula %>Enum} from "../../servicios/<%= nombreGuiones %>/enum/<%= nombreGuiones %>-enum";

export const Ruta<%= nombreMayuscula %>TranslationConstante: TraduccionGenerica<<%= nombreMayuscula %>Enum> = TraduccionFuncion(
    <%= nombreMayuscula %>Enum,
    NombreModulo_LLENAR,
    '<%= nombreCamel %>'
);
