
export const SERVICIO_LOGISTICO_CAMPO_SELECT_HABILITADO: (claseComponente: any) => CampoFormulario = (claseComponente: any) => {
  return {
    hidden: false,
    componente: claseComponente,
    validators: [],
    asyncValidators: null,
    valorInicial: '',
    nombreCampo: 'habilitado',
    nombreMostrar: 'Habilitado',
    textoAyuda: 'Filtra por habilitado.',
    placeholderEjemplo: 'Ej: Activo / Inactivo',
    formulario: {},
    mensajes: MENSAJES_ERROR(claseComponente),
    parametros: {
      nombreCampo: 'habilitado',
    },
    estaValido: true,
    tipoCampoHtml: 'select',
    valorActual: '',
    tamanioColumna: 6,
    disabled: false,
    select: {
      valoresSelect: [
        {
        habilitado: 1
        },
        {
        habilitado: 0
        },
        {
        habilitado: undefined
        },
      ],
      placeholderFiltro: 'Filtre por Activo Ej: A o I',
      mensajeFiltroVacio: 'No se encontró',
      campoFiltrado: 'habilitado',
      fnMostrarEnSelect: (campo: { habilitado: 0 | 1 | undefined }) => {
        if (campo.habilitado === undefined) {
          return 'Todos';
        }
        if (campo.habilitado === 1) {

          return 'Activo';
        }
        if (campo.habilitado === 0) {

          return 'Inactivo';
        }
        return '';
      },
      campoSeleccionado: 'habilitado'
    }
  };
};
