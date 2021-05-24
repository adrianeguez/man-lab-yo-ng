import {CampoFormulario} from '@manticore-labs/ng-2021';

export const POKEMON_BUSQUEDA_CAMPO_SELECT_HABILITADO: (claseComponente: any) => CampoFormulario = (claseComponente: any) => {
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
    
      nombreCampo: 'Habilitado',
      
    },
    estaValido: true,
    tipoCampoHtml: 'select',
    valorActual: '',
    tamanioColumna: 6,
    disabled: false,
    select: {
      valoresSelect: [
        {
        sisHabilitado: ActivoInactivo.Activo
        },
        {
        sisHabilitado: ActivoInactivo.Inactivo
        },
        {
        sisHabilitado: undefined
        },
      ],

      
      placeholderFiltro: 'Filtre por Activo Ej: A o I',
      

     
      mensajeFiltroVacio: 'No se encontró',
      


      campoFiltrado: 'sisHabilitado',
      fnMostrarEnSelect: (campo: { sisHabilitado: ActivoInactivo | undefined }) => {
        if (campo.sisHabilitado === undefined) {

          
            return 'Todos';
          


        }
        if (campo.sisHabilitado === ActivoInactivo.Activo) {
          
          return 'Activo';
          
        }
        if (campo.sisHabilitado === ActivoInactivo.Inactivo) {
          
          return 'Inactivo';
          
        }
        return '';
      },
      campoSeleccionado: 'sisHabilitado'
    }
  };
};
