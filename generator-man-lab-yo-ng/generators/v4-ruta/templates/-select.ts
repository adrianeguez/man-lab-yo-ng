import {PrimengDropdownOptions} from "../../../../../../types/primeng.dropdown-options";
import {nombre<%= nombreMayuscula %>} from "../../../../nombre-<%= nombreGuiones %>";
const nombreModulo = nombre<%= nombreMayuscula %>
export const <%= nombreMayuscula %>Select: { [key in <%= nombreMayuscula %>SelectEnum]: PrimengDropdownOptions } = {
    generoLibro: [
        // {
        //     code: 'GL1',
        //     name: nombreModulo + '.generos.accion',
        // },
        // {
        //     code: 'GL2',
        //     name: nombreModulo + '.generos.drama',
        // },
    ]
};

enum <%= nombreMayuscula %>SelectEnum {
    // generoLibro = 'generoLibro'
}
