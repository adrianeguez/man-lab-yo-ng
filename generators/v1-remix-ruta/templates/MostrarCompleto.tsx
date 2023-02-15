import {List} from "konsta/react";
import {
    <%= nombreMayuscula %>MostrarCompletoInterface
} from "~/components/<%= nombreGuiones %>/interfaces/<%= nombreGuiones %>-mostrar-completo.interface";
import {<%= nombreMayuscula %>Mostrar} from "~/components/<%= nombreGuiones %>/<%= nombreMayuscula %>Mostrar";

export function <%= nombreMayuscula %>MostrarCompleto(props: <%= nombreMayuscula %>MostrarCompletoInterface) {
    const {registro} = props
    return (
        <>
            <List>
                <<%= nombreMayuscula %>Mostrar registro={registro}/>
            </List>
        </>
    )
}