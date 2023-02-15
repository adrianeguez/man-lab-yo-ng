import {PRUEBA_NAVEGACION_<%= nombreSoloMayusculas %>_ETIQUETAS} from './prueba-navegacion-<%= nombreGuiones %>.etiquetas';
import {irRutaGestion<%= nombreMayuscula %>Funcion} from '../../definicion-rutas/ir-ruta-gestion-<%= nombreGuiones %>.funcion';

declare var Cypress: any;
const etiqueta = PRUEBA_NAVEGACION_<%= nombreSoloMayusculas %>_ETIQUETAS.pruebaNavegacion<%= nombreMayuscula %>;

export function pruebaNavegacion<%= nombreMayuscula %>Funcion(
  ruta: RutaCypressInterface,
  cy: Cypress.cy | Cypress.Chainable
) {
  describe(
    etiqueta
      .describe,
    () => {
      beforeEach(() => {
        // Acciones a realizar antes de empezar
      });

      it(
        etiqueta
          .escenarios
          .navegacion, () => {
          const nombreFormularioBusqueda = 'filtro-<%= nombreGuiones %>';
          const numeroRegistrosTabla = 0;
          const numeroRegistrosTablaEditada = 0;
          irRutaGestion<%= nombreMayuscula %>Funcion(ruta, cy);
          const objetoFormulario: FormularioCypressInterface = {
            pDropdown: {
              opcionASeleccionar: 'A',
              caracteresAEliminar: 0,
            },
            idCampo: nombreFormularioBusqueda + 'sisHabilitado',
            tipo: 'p-dropdown'
          };
          let chain = cy.wait(2000);
          formularioFuncion(cy, objetoFormulario);
          chain = chain.get('#busqueda-filtros-<%= nombreGuiones %>');
          chain = chain.click();
          chain = chain.wait(2000);
          chain = chain.get('tbody').find('tr').should('have.length', numeroRegistrosTabla);

          if (objetoFormulario.pDropdown) {
            objetoFormulario.pDropdown.opcionASeleccionar = 'I';
            objetoFormulario.pDropdown.caracteresAEliminar = 1;
          }

          formularioFuncion(cy, objetoFormulario);
          chain = chain.get('#busqueda-filtros-<%= nombreGuiones %>');
          chain = chain.click();
          chain = chain.wait(2000);
          chain = chain.get('tbody').find('tr').should('have.length', 0);

          // limpiar sishabilitado
          chain = chain.get('#' + nombreFormularioBusqueda + 'sisHabilitado_limpiar');
          chain = chain.click();

          // buscar por nombre
          chain = chain.get('#' + nombreFormularioBusqueda + 'busqueda');
          chain = chain.type(LLENAR_CON_VALORES_DE_LA_BUSQUEDA);
          chain = chain.get('#busqueda-filtros-<%= nombreGuiones %>');
          chain = chain.click();
          chain = chain.wait(500);
          chain = chain.get('tbody').find('tr').should('have.length', 1);

          // limpiar busqueda
          chain = chain.get('#' + nombreFormularioBusqueda + 'busqueda_limpiar');
          chain = chain.click();
          chain = chain.get('#busqueda-filtros-<%= nombreGuiones %>');
          chain = chain.click();

          // Crear <%= nombreEspacioMayuscula %>

          chain = chain.get('#crear-<%= nombreGuiones %>');
          chain = chain.click();

          LLENAR_FORMULARIO_CREAR;
          //
          // const objetoFormularioNombreCampo: FormularioCypressInterface = {
          //   input: {
          //     required: true,
          //     caracteresDePrueba: ['A', ' ', '-'],
          //     min: 3,
          //     max: 40,
          //   },
          //   idCampo: 'nombreCampo',
          //   tipo: 'input'
          // };
          //
          // formularioFuncion(chain, objetoFormularioNombreCampo);

          // const objetoFormularioNombreCampoPDropdown: FormularioCypressInterface = {
          //     pDropdown: {
          //         opcionASeleccionar: 'A',
          //         caracteresAEliminar: 0,
          //     },
          //     idCampo: 'nombreCampoPDropdown',
          //     tipo: 'p-dropdown'
          // };
          // formularioFuncion(cy, objetoFormularioNombreCampoPDropdown);

          // Crear registro

          chain = chain.get('button.p-button-raised.p-button-success').contains('Guardar').click();
          chain = chain.get('.p-confirm-dialog-accept').click();
          chain = chain.get('tbody').find('tr').should('have.length', numeroRegistrosTablaEditada);

          // Editar <%= nombreEspacioMayuscula %>

          chain = chain.get('tbody').find('tr').contains('Editar').click();


          LLENAR_FORMULARIO_EDITAR;

          // formularioFuncion(chain, objetoFormularioNombreCampo);
          // if (objetoFormularioNombreCampoPDropdown.pDropdown) {
          //   objetoFormularioNombreCampoPDropdown.pDropdown.opcionASeleccionar = 'OTRA_OPCION';
          //   formularioFuncion(chain, objetoFormularioNombreCampoPDropdown);
          // }



          chain = chain.get('button.p-button-raised.p-button-success').contains('Guardar').click();
          chain = chain.get('.p-confirm-dialog-accept').click();
          chain = chain.wait(2000);
          chain = chain.get('tbody').find('tr').should('have.length', numeroRegistrosTablaEditada);

          chain = chain.get('tbody')
            .find('tr')
            .first()
            .find('.p-inputswitch')
            .click()
          chain = chain
            .get('.p-confirm-dialog-accept')
            .click();

          chain = chain.get('tbody').find('td.invalido-carta').should('be.visible');


          // chain.wait(2000);
        });

      it(
        etiqueta
          .escenarios
          .navegacionFalla, () => {

          const rutaAnterior = LLENAR_RUTA_ANTERIOR;
          let chain: Cypress.cy | Cypress.Chainable = cy.visit('/desarrollo');
          chain = chain.wait(10);
          chain = chain.get('#permiso');
          chain = chain.clear();
          chain = chain.get('#permiso-boton');
          chain = chain.click();
          chain = chain.get('#ruta');
          chain = chain.type(`[${rutaAnterior}, "gestion-<%= nombreGuiones %>"]`);
          chain = chain.get('#ruta-boton');
          chain = chain.click();
          chain = chain.location('pathname').should('include', 'no-tiene-permisos');
        });


    }
  );

}
