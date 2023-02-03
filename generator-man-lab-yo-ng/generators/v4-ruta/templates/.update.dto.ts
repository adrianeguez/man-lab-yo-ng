
export type <%= nombreMayuscula %>UpdateFormDto = <%= nombreMayuscula %>UpdateDto;
// Ejemplo exluir campo
// Omit<<%= nombreMayuscula %>UpdateDto, 'nombreCampoLista'> & { nombreCampoLista: PrimengDropdownOption };
// Omit<<%= nombreMayuscula %>UpdateDto, 'campoRelacion'> & { campoRelacion: number | <%= nombreMayuscula %>Dto | null }
//Ejemplo varios campos
// Omit<<%= nombreMayuscula %>UpdateDto, 'campoRelacion' | 'nombreCampoList'> & {
// campoRelacion?: number | <%= nombreMayuscula %>Dto | null;
// nombreCampoLista?: PrimengDropdownOption;
// }
export interface <%= nombreMayuscula %>UpdateDto extends <%= nombreMayuscula %>ActualizarDto{
    sisHabilitado: SisHabilitadoEnum;
}
