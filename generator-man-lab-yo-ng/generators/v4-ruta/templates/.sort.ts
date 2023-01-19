import {SortFieldInterface} from "../../../../../interfaces/sort-field.interface";
import {CAMPOS_COMUNES_SORT} from "../../../../../constantes/sort/campos-comunes.sort";

export const <%= nombreSoloMayusculas %>Sort: SortFieldInterface[] = [
    ...CAMPOS_COMUNES_SORT,
    // Ejemplo sort
    // {
    //     sortField: 'nombre',
    //     sortOrder: SortOrderEnum.Asc,
    //     sortFieldLabel: 'modulo-nest.camposFormulario.nombre.nombre'
    // }
];
