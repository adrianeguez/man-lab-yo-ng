
export interface PruebaSeguridadPermiso<%= nombreMayuscula %>Interface extends IndiceEtiquetas {
  pruebaSeguridadPermiso<%= nombreMayuscula %>: {
    path: string;
    etiquetas: string[];
    describe: string;
    escenarios: {
      verificarNoTienePermiso: string;
      verificarTienePermiso: string;
    }
  };
}
