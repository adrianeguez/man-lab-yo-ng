import {ruta<%= nombreMayuscula %>Constante} from '../constantes/ruta-<%= nombreGuiones %>.constante';
import {ARREGLO_PRUEBAS_RUTA_<%= nombreSoloMayusculas %>} from './arreglo-pruebas.constante';

const ruta: RutaCypressInterface = {};

describe(
  ruta<%= nombreMayuscula %>Constante.describeGeneral,
  () => {
    ARREGLO_PRUEBAS_RUTA_<%= nombreSoloMayusculas %>
      .forEach(
        (objetoPrueba) => {
          verificarSiEjecutaPorEtiquetas(
            objetoPrueba(ruta)
          );
        }
      );
  }
);

