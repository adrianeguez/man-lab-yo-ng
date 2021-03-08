
export interface SRuta<%= nombreMayuscula %>Parametros extends RutaParametrosComun {
    <%= id %>?: string;
    // nombreCampo?: string; // Todos los campos deben ser STRING o ENUMS DE TIPO STRING
    // Normalmente es TODOS los que estén en el archivo <%= nombreMayuscula %>BusquedaDto
    // nombreCampoRelacion?: string;
}
