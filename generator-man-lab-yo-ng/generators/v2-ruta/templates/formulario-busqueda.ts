import {CampoFormulario} from '@manticore-labs/ng-2021';
import {<%= nombreSoloMayusculas %>_BUSQUEDA_CAMPO_TEXTO_BUSQUEDA} from './<%= nombreGuiones %>-busqueda-campo-texto-busqueda';
import {<%= nombreSoloMayusculas %>_BUSQUEDA_CAMPO_SELECT_HABILITADO} from './<%= nombreGuiones %>-busqueda-campo-select-habilitado';


export const <%= nombreSoloMayusculas %>_FORMULARIO_BUSQUEDA: (claseComponente: any) => CampoFormulario[] = (claseComponente: any) => {
  return [
    <%= nombreSoloMayusculas %>_BUSQUEDA_CAMPO_TEXTO_BUSQUEDA(claseComponente),
    <%= nombreSoloMayusculas %>_BUSQUEDA_CAMPO_SELECT_HABILITADO(claseComponente)
  ];
};
// yo man-lab-yo-ng:v2-campo-formulario
// Texto:
// NombreRuta NombreCampo texto
// NombreRuta NombreCampo texto --esFormulario true
// NombreRuta NombreCampo texto --esFormulario true --nombrePrefijo prefijo
// NombreRuta NombreCampo texto --esFormulario true --nombrePrefijo prefijo --esDependiente true
// Password:
// NombreRuta NombreCampo password
// NombreRuta NombreCampo password --esFormulario true
// NombreRuta NombreCampo password --esFormulario true --nombrePrefijo prefijo
// NombreRuta NombreCampo password --esFormulario true --nombrePrefijo prefijo --esDependiente true
// Busqueda:
// NombreRuta NombreCampo busqueda
// NombreRuta NombreCampo busqueda --nombrePrefijo prefijo
// Input Number:
// NombreRuta NombreCampo inputNumber
// NombreRuta NombreCampo inputNumber --esFormulario true
// NombreRuta NombreCampo inputNumber --esFormulario true --nombrePrefijo prefijo
// NombreRuta NombreCampo inputNumber --esFormulario true --nombrePrefijo prefijo --esDependiente true
// Input Mask:
// NombreRuta NombreCampo inputMask
// NombreRuta NombreCampo inputMask --esFormulario true
// NombreRuta NombreCampo inputMask --esFormulario true --nombrePrefijo prefijo
// NombreRuta NombreCampo inputMask --esFormulario true --nombrePrefijo prefijo --esDependiente true
// Input Switch:
// NombreRuta NombreCampo inputSwitch
// NombreRuta NombreCampo inputSwitch --esFormulario true
// NombreRuta NombreCampo inputSwitch --esFormulario true --nombrePrefijo prefijo
// NombreRuta NombreCampo inputSwitch --esFormulario true --nombrePrefijo prefijo --esDependiente true
// Autocomplete:
// NombreRuta NombreCampo autocomplete --nombrePropiedad nombrePropiedadRelacion
// NombreRuta NombreCampo autocomplete --nombrePropiedad nombrePropiedadRelacion --esFormulario true
// NombreRuta NombreCampo autocomplete --nombrePropiedad nombrePropiedadRelacion --esFormulario true --nombrePrefijo prefijo
// NombreRuta NombreCampo autocomplete --nombrePropiedad nombrePropiedadRelacion --esFormulario true --nombrePrefijo prefijo --esDependiente true
// Select:
// NombreRuta NombreCampo select "Día Lunes=\'L\'=L,Martes=\'M\'=M"
// NombreRuta NombreCampo select "Día Lunes=\'L\'=L,Martes=\'M\'=M" --esFormulario true
// NombreRuta NombreCampo select "Día Lunes=\'L\'=L,Martes=\'M\'=M" "Ningún día de la semana" --esFormulario true
// NombreRuta NombreCampo select "Estado Civil=EstadoCivil.Soltero=SO,Estado Civil=EstadoCivil.Casado=SO" --esFormulario true --nombrePrefijo prefijo
// NombreRuta NombreCampo select "Estado Civil=EstadoCivil.Soltero=SO,Estado Civil=EstadoCivil.Casado=SO" "Ningún estádo civil" --esFormulario true --nombrePrefijo prefijo
// NombreRuta NombreCampo select "Estado Civil=EstadoCivil.Soltero=SO,Estado Civil=EstadoCivil.Casado=SO" --esFormulario true --nombrePrefijo prefijo --esDependiente true
// NombreRuta NombreCampo select "Estado Civil=EstadoCivil.Soltero=SO,Estado Civil=EstadoCivil.Casado=SO" "Ningún estádo civil" --esFormulario true --nombrePrefijo prefijo --esDependiente true
