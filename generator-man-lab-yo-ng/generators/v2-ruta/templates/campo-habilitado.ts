
export const <%= nombreSoloMayusculas %>_BUSQUEDA_CAMPO_SELECT_HABILITADO: (claseComponente: any) => CampoFormulario = (claseComponente: any) => {
  return {
    hidden: false,
    componente: claseComponente,
    validators: [],
    asyncValidators: null,
    valorInicial: '',
    nombreCampo: '<%= nombreHabilitado %>',
    nombreMostrar: 'Habilitado',
    textoAyuda: 'Filtra por habilitado.',
    placeholderEjemplo: 'Ej: Activo / Inactivo',
    formulario: {},
    mensajes: MENSAJES_ERROR(claseComponente),
    parametros: {
      nombreCampo: '<%= nombreHabilitado %>',
    },
    estaValido: true,
    tipoCampoHtml: 'select',
    valorActual: '',
    tamanioColumna: 6,
    disabled: false,
    select: {
      valoresSelect: [
        {
        <%= nombreHabilitado %>: ActivoInactivo.ACTIVO
        },
        {
        <%= nombreHabilitado %>: ActivoInactivo.INACTIVO
        },
        {
        <%= nombreHabilitado %>: undefined
        },
      ],
      placeholderFiltro: 'Filtre por Activo Ej: A o I',
      mensajeFiltroVacio: 'No se encontró',
      campoFiltrado: '<%= nombreHabilitado %>',
      fnMostrarEnSelect: (campo: { <%= nombreHabilitado %>: ActivoInactivo | undefined }) => {
        if (campo.<%= nombreHabilitado %> === undefined) {
          return 'Todos';
        }
        if (campo.<%= nombreHabilitado %> === ActivoInactivo.ACTIVO) {

          return 'Activo';
        }
        if (campo.<%= nombreHabilitado %> === ActivoInactivo.INACTIVO) {

          return 'Inactivo';
        }
        return '';
      },
      campoSeleccionado: '<%= nombreHabilitado %>'
    }
  };
};
