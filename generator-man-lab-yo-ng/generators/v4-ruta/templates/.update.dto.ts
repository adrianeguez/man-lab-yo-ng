// Ejemplo exluir campo
export type <%= nombreMayuscula %>UpdateFormDto = <%= nombreMayuscula %>UpdateDto
// Omit<<%= nombreMayuscula %>UpdateDto, 'nombreCampoLista'> & { nombreCampoLista: PrimengDropdownOption };
// Omit<<%= nombreMayuscula %>UpdateDto, 'campoRelacion'> & { campoRelacion: number | <%= nombreMayuscula %>Dto | null }
export interface <%= nombreMayuscula %>UpdateDto extends <%= nombreMayuscula %>ActualizarDto{

}
