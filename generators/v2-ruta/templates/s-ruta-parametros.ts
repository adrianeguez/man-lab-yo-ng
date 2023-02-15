import {RutaParametrosComun} from '@manticore-labs/ng-2021';

export interface SRuta<%= nombreMayuscula %>Parametros extends RutaParametrosComun {
    <%= id %>?: string; <%= !esFirebase ? "" : "// Solo para que no de errores de lint (no borrar a menos que tenga otros parametros)" %>
    // nombreCampo?: string; // Todos los campos deben ser STRING o ENUMS DE TIPO STRING
    <% if(!esFirebase){ %>
    // Normalmente es TODOS los que estén en el archivo <%= nombreMayuscula %>BusquedaDto
    // nombreCampoRelacion?: string;
    <% }%>
    <% if(!esFirebase){ %>
    // Si hay colecciones superiores en la ruta se las pone aqui
    // nombreCampoColeccionSuperior?: string;
    <% }%>
}
