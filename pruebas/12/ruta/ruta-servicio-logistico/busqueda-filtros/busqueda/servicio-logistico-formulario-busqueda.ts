
import {SERVICIO_LOGISTICO_CAMPO_BUSQUEDA} from './servicio-logistico-campo-busqueda';
import {SERVICIO_LOGISTICO_CAMPO_HABILITADO} from './servicio-logistico-campo-habilitado';


export const SERVICIO_LOGISTICO_FORMULARIO_BUSQUEDA: (claseComponente: any) => CampoFormulario[] = (claseComponente: any) => {
  return [
    SERVICIO_LOGISTICO_CAMPO_BUSQUEDA(claseComponente),
    SERVICIO_LOGISTICO_CAMPO_HABILITADO(claseComponente)
  ];
};
