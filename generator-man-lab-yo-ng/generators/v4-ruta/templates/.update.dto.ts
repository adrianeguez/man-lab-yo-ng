// Ejemplo exluir campo
// export type <%= nombreMayuscula %>UpdateFormDto = Omit<<%= nombreMayuscula %>ActualizarDto, 'nombreCampoLista'> & { nombreCampoLista: PrimengDropdownOption };
export interface <%= nombreMayuscula %>UpdateDto extends <%= nombreMayuscula %>ActualizarDto{

}
