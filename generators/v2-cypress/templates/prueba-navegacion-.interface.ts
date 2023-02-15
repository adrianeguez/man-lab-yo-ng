
export interface PruebaNavegacion<%= nombreMayuscula %>Interface extends IndiceEtiquetas {
  pruebaNavegacion<%= nombreMayuscula %>: {
    path: string;
    etiquetas: string[];
    describe: string;
    escenarios: {
      navegacion: string;
      navegacionFalla: string;
    }
  };
}
