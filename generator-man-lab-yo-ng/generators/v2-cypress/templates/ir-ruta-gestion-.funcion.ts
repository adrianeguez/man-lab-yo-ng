
declare var Cypress: any;

export function irRutaGestion<%= nombreMayuscula %>Funcion(
  ruta: RutaCypressInterface,
  cy: Cypress.cy | Cypress.Chainable
): Cypress.cy | Cypress.Chainable {
  let chain: Cypress.cy | Cypress.Chainable;
  const rutaAnterior = LLENAR_RUTA_ANTERIOR;
  chain = cy.visit('/desarrollo');
  chain = chain.wait(10);
  chain = chain.get('#permiso');
  chain = chain.type('/<%= nombreGuiones %>');
  chain = chain.click();
  chain = chain.get('#permiso-boton');
  chain = chain.get('#ruta');
  chain = chain.type(`[${rutaAnterior}, "gestion-<%= nombreGuiones %>"]`);
  chain = chain.get('#ruta-boton');
  chain = chain.click();
  chain = chain.location('pathname').should('include', 'gestion-<%= nombreGuiones %>');
  return chain;
}
