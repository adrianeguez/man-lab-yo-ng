
export type <%= nombreMayuscula %>FindFormDto = <%= nombreMayuscula %>FindDto;
// Ejemplo exluir campo
// Omit<<%= nombreMayuscula %>FindDto, 'nombreCampoLista'> & { nombreCampoLista: PrimengDropdownOption };
// Omit<<%= nombreMayuscula %>FindDto, 'campoRelacion'> & { campoRelacion: number | <%= nombreMayuscula %>Dto | null }
//Ejemplo varios campos
// Omit<<%= nombreMayuscula %>FindDto, 'campoRelacion' | 'nombreCampoList'> & {
// campoRelacion?: number | <%= nombreMayuscula %>Dto | null;
// nombreCampoLista?: PrimengDropdownOption;
// }
export interface <%= nombreMayuscula %>FindDto extends <%= nombreMayuscula %>BusquedaDto{

}
