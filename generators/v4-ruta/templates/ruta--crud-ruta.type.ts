import {<%= nombreMayuscula %>Dto} from "../../servicios/<%= nombreGuiones %>/dto/<%= nombreGuiones %>.dto";
import {<%= nombreMayuscula %>FindDto} from "../../servicios/<%= nombreGuiones %>/dto/<%= nombreGuiones %>.find.dto";
import {
    <%= nombreMayuscula %>UpdateHabilitadoDto
} from "../../servicios/<%= nombreGuiones %>/dto/<%= nombreGuiones %>.update-habilitado.dto";
import {<%= nombreMayuscula %>CreateDto} from "../../servicios/<%= nombreGuiones %>/dto/<%= nombreGuiones %>.create.dto";
import {<%= nombreMayuscula %>UpdateDto} from "../../servicios/<%= nombreGuiones %>/dto/<%= nombreGuiones %>.update.dto";
import {Ruta<%= nombreMayuscula %>Component} from "./ruta-<%= nombreGuiones %>.component";

export type Ruta<%= nombreMayuscula %>CrudRutaType = CrudRutaComponent<
    <%= nombreMayuscula %>Dto,
    <%= nombreMayuscula %>FindDto,
    <%= nombreMayuscula %>UpdateHabilitadoDto,
    <%= nombreMayuscula %>CreateDto,
    <%= nombreMayuscula %>UpdateDto,
    Ruta<%= nombreMayuscula %>Component
>;

export type Ruta<%= nombreMayuscula %>DialogoSinForm = DialogoManticoreComponent<Ruta<%= nombreMayuscula %>Component>;

export type Ruta<%= nombreMayuscula %>DialogoSinFormParametros = ParametrosDialogoManticore<Ruta<%= nombreMayuscula %>Component>;

export type Ruta<%= nombreMayuscula %>Autocomplete<%= nombreMayuscula %> = AutocompleteManticoreComponent<Ruta<%= nombreMayuscula %>Component>;
export type Ruta<%= nombreMayuscula %>AutocompleteMostrar<%= nombreMayuscula %> = AutocompleteManticoreComponent<Ruta<%= nombreMayuscula %>Component>;
