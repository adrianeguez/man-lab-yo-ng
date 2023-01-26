
// Ejemplo exluir campo
export type <%= nombreMayuscula %>CreateFormDto = <%= nombreMayuscula %>CreateDto
// Omit<<%= nombreMayuscula %>CreateDto, 'nombreCampoLista'> & { nombreCampoLista: PrimengDropdownOption };
// Omit<<%= nombreMayuscula %>CreateDto, 'campoRelacion'> & { campoRelacion: number | <%= nombreMayuscula %>Dto | null }
export interface <%= nombreMayuscula %>CreateDto extends <%= nombreMayuscula %>CrearDto{

}
