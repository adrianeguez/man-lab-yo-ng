import {CampoFormulario} from '@manticore-labs/ng-2021';

export const POKEMON_BUSQUEDA_CAMPO_TEXTO_BUSQUEDA: (claseComponente: RutaPokemonComponent) => CampoFormulario = (claseComponente: RutaPokemonComponent) => {
  return {
    componente: claseComponente,
    validators: [],
    asyncValidators: null,
    valorInicial: undefined,
    nombreCampo: 'busqueda',

      
      nombreMostrar: 'Búsqueda',
      

    
      textoAyuda: 'Busca por nombre.',
      

    
      placeholderEjemplo: 'Ej: ...',
      


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
