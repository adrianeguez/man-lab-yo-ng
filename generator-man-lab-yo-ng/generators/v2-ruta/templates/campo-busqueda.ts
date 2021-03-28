
export const <%= nombreSoloMayusculas %>_BUSQUEDA_CAMPO_TEXTO_BUSQUEDA: (claseComponente: any) => CampoFormulario = (claseComponente: any) => {
  return {
    componente: claseComponente,
    validators: [],
    asyncValidators: null,
    valorInicial: undefined,
    nombreCampo: '<%= !esFirebase ? "busqueda" : "__busquedaGlobal" %>',
    nombreMostrar: 'Búsqueda',
    textoAyuda: 'Busca por nombre.',
    placeholderEjemplo: 'Ej: Servi...',
    formulario: {},
    mensajes: MENSAJES_ERROR(claseComponente),
    parametros: {
      nombreCampo: 'Búsqueda',
    },
    estaValido: true,
    hidden: false,
    tipoCampoHtml: 'text',
    valorActual: '',
    tamanioColumna: 6,
    disabled: false
  };
};
