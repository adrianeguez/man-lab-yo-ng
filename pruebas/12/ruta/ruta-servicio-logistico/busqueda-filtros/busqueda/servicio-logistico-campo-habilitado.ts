
export const SERVICIO_LOGISTICO_CAMPO_HABILITADO: (claseComponente: any) => CampoFormulario = (claseComponente: any) => {
  return {
    hidden: false,
    componente: claseComponente,
    validators: [],
    asyncValidators: null,
    valorInicial: '',
    nombreCampo: 'sisHabilitado',
    nombreMostrar: 'Habilitado',
    textoAyuda: 'Filtra por habilitado.',
    placeholderEjemplo: 'Ej: Activo / Inactivo',
    formulario: {},
    mensajes: MENSAJES_ERROR(claseComponente),
    parametros: {
      nombreCampo: 'sisHabilitado',
    },
    estaValido: true,
    tipoCampoHtml: 'select',
    valorActual: '',
    tamanioColumna: 6,
    disabled: false,
    select: {
      valoresSelect: [
        {
        sisHabilitado: 1
        },
        {
        sisHabilitado: 0
        },
        {
        sisHabilitado: undefined
        },
      ],
      placeholderFiltro: 'Filtre por Activo Ej: A o I',
      mensajeFiltroVacio: 'No se encontró',
      campoFiltrado: 'sisHabilitado',
      fnMostrarEnSelect: (campo: { sisHabilitado: 0 | 1 | undefined }) => {
        if (campo.sisHabilitado === undefined) {
          return 'Todos';
        }
        if (campo.sisHabilitado === 1) {

          return 'Activo';
        }
        if (campo.sisHabilitado === 0) {

          return 'Inactivo';
        }
        return '';
      },
      campoSeleccionado: 'sisHabilitado'
    }
  };
};
