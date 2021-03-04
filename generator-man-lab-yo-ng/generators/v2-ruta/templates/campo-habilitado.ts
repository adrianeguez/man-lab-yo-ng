
export const <%= nombreSoloMayusculas %>_CAMPO_HABILITADO: (claseComponente: any) => CampoFormulario = (claseComponente: any) => {
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
        <%= nombreHabilitado %>: 1
        },
        {
        <%= nombreHabilitado %>: 0
        },
        {
        <%= nombreHabilitado %>: undefined
        },
      ],
      placeholderFiltro: 'Filtre por Activo Ej: A o I',
      mensajeFiltroVacio: 'No se encontró',
      campoFiltrado: '<%= nombreHabilitado %>',
      fnMostrarEnSelect: (campo: { <%= nombreHabilitado %>: 0 | 1 | undefined }) => {
        if (campo.<%= nombreHabilitado %> === undefined) {
          return 'Todos';
        }
        if (campo.<%= nombreHabilitado %> === 1) {

          return 'Activo';
        }
        if (campo.<%= nombreHabilitado %> === 0) {

          return 'Inactivo';
        }
        return '';
      },
      campoSeleccionado: '<%= nombreHabilitado %>'
    }
  };
};
