
export interface <%= nombreMayuscula %>Interface extends EntidadComunProyecto<%= esFirebase ? 'Firebase':'' %>{
  <% if(!esFirebase){ %>
  <%= id %>?: number;
  <% }%>
  // nombreCampo?: string; // Cada uno de los campos de la Entidad
  <% if(!esFirebase){ %>
  // nombreCampoRelacion?: CampoRelacionInterface | number;
  <% }%>

}
