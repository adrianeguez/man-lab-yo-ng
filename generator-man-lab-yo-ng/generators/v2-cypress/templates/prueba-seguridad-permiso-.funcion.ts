import {PRUEBA_SEGURIDAD_PERMISO_<%= nombreSoloMayusculas %>_ETIQUETAS} from './prueba-seguridad-permiso-<%= nombreGuiones %>.etiquetas';

declare var Cypress: any;
const etiqueta = PRUEBA_SEGURIDAD_PERMISO_<%= nombreSoloMayusculas %>_ETIQUETAS.pruebaSeguridadPermiso<%= nombreMayuscula %>;
const nombreControlador = '/<%= nombreGuiones %>';
export function pruebaSeguridadPermiso<%= nombreMayuscula %>Funcion(
  ruta: RutaCypressInterface,
  cy: Cypress.cy | Cypress.Chainable
) {
  describe(
    etiqueta
      .describe,
    () => {
      beforeEach(() => {
        // nada
      });

      it(
        etiqueta
          .escenarios
          .verificarNoTienePermiso, () => {
          cy.request({
            failOnStatusCode: false,
            url: CONFIG_CONSTANTE.urlBackend + nombreControlador,
            method: 'GET'
          })
            .then((response) => {
              expect(response).property('status').to.equal(403);
            });

          cy.request({
            failOnStatusCode: false,
            url: CONFIG_CONSTANTE.urlBackend + nombreControlador,
            method: 'POST'
          })
            .then((response) => {
              expect(response).property('status').to.equal(403);
            });

          cy.request({
            failOnStatusCode: false,
            url: CONFIG_CONSTANTE.urlBackend + nombreControlador,
            method: 'POST'
          })
            .then((response) => {
              expect(response).property('status').to.equal(403);
            });

          cy.request({
            failOnStatusCode: false,
            url: CONFIG_CONSTANTE.urlBackend + nombreControlador + '/1/modificar-habilitado',
            method: 'PUT'
          })
            .then((response) => {
              expect(response).property('status').to.equal(403);
            });

          cy.request({
            failOnStatusCode: false,
            url: CONFIG_CONSTANTE.urlBackend + nombreControlador + '/1',
            method: 'PUT'
          })
            .then((response) => {
              expect(response).property('status').to.equal(403);
            });
        }
      );

      it(
        etiqueta
          .escenarios
          .verificarTienePermiso, () => {
          let chain = cy.request({
            failOnStatusCode: false,
            url: CONFIG_CONSTANTE.urlBackend + '/setear-sesion?permisos=vacio',
            method: 'GET'
          });
          chain = chain.request({
            failOnStatusCode: false,
            url: CONFIG_CONSTANTE.urlBackend + '/setear-sesion?permisos=' + nombreControlador,
            method: 'GET'
          });
          chain = chain.request({
            failOnStatusCode: false,
            url: CONFIG_CONSTANTE.urlBackend + nombreControlador ,
            method: 'GET'
          });
          chain
            .then((response) => {
              expect(response).property('status').to.equal(200);
            });

          cy.request({
            failOnStatusCode: false,
            url: CONFIG_CONSTANTE.urlBackend + nombreControlador + '/1/modificar-habilitado',
            method: 'PUT'
          })
            .then((response) => {
              expect(response).property('status').to.equal(400);
            });

          cy.request({
            failOnStatusCode: false,
            url: CONFIG_CONSTANTE.urlBackend + nombreControlador + '/1',
            method: 'PUT'
          })
            .then((response) => {
              expect(response).property('status').to.equal(200);
            });

          cy.request({
            failOnStatusCode: false,
            url: CONFIG_CONSTANTE.urlBackend + nombreControlador ,
            method: 'POST'
          })
            .then((response) => {
              expect(response).property('status').to.equal(400);
            });

        }
      );
    }
  );
}
