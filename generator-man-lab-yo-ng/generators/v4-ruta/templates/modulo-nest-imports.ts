import {SharedImportsModulo} from "../../../constantes/ng/shared-imports-modulo";
import {Ruta<%= nombreMayuscula %>Imports} from "../rutas/ruta-<%= nombreGuiones %>/ruta-<%= nombreGuiones %>.imports";

export const MODULO_NEST_IMPORTS = [
    ...SharedImportsModulo,
    ...Ruta<%= nombreMayuscula %>Imports,
];
