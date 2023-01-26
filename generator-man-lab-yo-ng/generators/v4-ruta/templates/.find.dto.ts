// Ejemplo exluir campo
export type <%= nombreMayuscula %>FindFormDto = <%= nombreMayuscula %>FindDto
// Omit<<%= nombreMayuscula %>FindDto, 'nombreCampoLista'> & { nombreCampoLista: PrimengDropdownOption };
// Omit<<%= nombreMayuscula %>FindDto, 'campoRelacion'> & { campoRelacion: number | <%= nombreMayuscula %>Dto | null }
export interface <%= nombreMayuscula %>FindDto extends <%= nombreMayuscula %>BusquedaDto{

}
