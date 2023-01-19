import {<%= nombreMayuscula %>ActualizarDto} from "../../../../../generated/api-solo-back";
// Ejemplo exluir campo
// import {PrimengDropdownOption} from "../../../../../types/primeng.dropdown-options";

// export type <%= nombreMayuscula %>UpdateFormDto = Omit<<%= nombreMayuscula %>ActualizarDto, 'generoLibro'> & { generoLibro: PrimengDropdownOption };
export interface UpdateDto extends <%= nombreMayuscula %>ActualizarDto{

}
