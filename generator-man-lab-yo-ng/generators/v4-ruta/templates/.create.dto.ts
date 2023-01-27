

export type <%= nombreMayuscula %>CreateFormDto = <%= nombreMayuscula %>CreateDto;
// Ejemplo exluir campo
// Omit<<%= nombreMayuscula %>CreateDto, 'nombreCampoLista'> & { nombreCampoLista?: PrimengDropdownOption };
// Omit<<%= nombreMayuscula %>CreateDto, 'campoRelacion'> & { campoRelacion?: number | <%= nombreMayuscula %>Dto | null }
//Ejemplo varios campos
// Omit<<%= nombreMayuscula %>CreateDto, 'campoRelacion' | 'nombreCampoList'> & {
// campoRelacion?: number | <%= nombreMayuscula %>Dto | null;
// nombreCampoLista?: PrimengDropdownOption;
// }
export interface <%= nombreMayuscula %>CreateDto extends <%= nombreMayuscula %>CrearDto{
    sisHabilitado: SisHabilitadoEnum;
}
