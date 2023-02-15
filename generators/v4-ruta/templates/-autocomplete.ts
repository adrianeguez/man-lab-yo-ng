import {<%= nombreMayuscula %>Enum} from "../../enum/<%= nombreGuiones %>-enum";
import {
    Ruta<%= nombreMayuscula %>Component
} from "../../../../rutas/ruta-<%= nombreGuiones %>/ruta-<%= nombreGuiones %>.component";
import {<%= nombreMayuscula %>CreateDtoComponent} from "../create-dto/<%= nombreGuiones %>.create.dto.component";
import {<%= nombreMayuscula %>FindDtoComponent} from "../find-dto/<%= nombreGuiones %>.find.dto.component";
import {<%= nombreMayuscula %>UpdateDtoComponent} from "../update-dto/<%= nombreGuiones %>.update.dto.component";

export const <%= nombreMayuscula %>Autocomplete: (
    componente: <%= nombreMayuscula %>CreateDtoComponent | <%= nombreMayuscula %>FindDtoComponent | <%= nombreMayuscula %>UpdateDtoComponent
)=> {
    // [key in <%= nombreMayuscula %>Enum.campoRelacion
    //     // | <%= nombreMayuscula %>Enum.otroCampoRelacion
    // ] : TipoCampoManti
} = (
    componente: <%= nombreMayuscula %>CreateDtoComponent | <%= nombreMayuscula %>FindDtoComponent | <%= nombreMayuscula %>UpdateDtoComponent
)=>{
    return {
        // campoRelacion:
        //     {
        //         id: <%= nombreMayuscula %>Enum.nombreCampoRelacion,
        //         key: <%= nombreMayuscula %>Enum.nombreCampoRelacion,
        //         type: FormlyPrimengCampos.PrimengInputGroup,
        //         templateOptions: {
        //             required: true,
        //         },
        //         expressionProperties: {
        //              'templateOptions.label': componente.translateService.stream(componente.ruta<%= nombreMayuscula %>TranslationConstante.nombreCampoRelacion.nombre),
        //              'templateOptions.placeholder': componente.translateService.stream(componente.ruta<%= nombreMayuscula %>TranslationConstante.nombreCampoRelacion.placeholder'),
        //              'templateOptions.description': componente.translateService.stream(componente.ruta<%= nombreMayuscula %>TranslationConstante.nombreCampoRelacion.ayuda'),
        //         },
        //         autocompleteOpciones: {
        //             showButton: true,
        //             buttonText: componente.nombreModulo + '.<%= nombreCamel %>.camposFormulario.nombreCampoRelacion.nombre',
        //             autocompleteShowTemplate: componente.autocompleteMostrarNombreRelacion,
        //             autocompleteListTemplate: componente.autocompleteListarNombreRelacion,
        //             disabled: false,
        //             botonAutocompleteCallback: (field?: MantiAutocomplete,
        //                                         busqueda?: string,
        //                                         abrir?: boolean,
        //                                         contexto?: AutocompleteManticoreComponent
        //             ) => {
        //
        //                 const findDto: RelacionFindDto = {
        //                     busqueda
        //                 }
        //                 const ruta = componente.ruta as Ruta<%= nombreMayuscula %>Component;
        //                 const crudRuta: CrudRutaComponent = ruta.componenteCrudRuta<%= nombreMayuscula %>;
        //                 const parametros: busquedaAutocompleteComun<RelacionFindDto> = {
        //                     findDto,
        //                     campos: componente.campos,
        //                     form: componente.formularioManti.form,
        //                     crudRutaComponent: abrir ? crudRuta : undefined,
        //                     templateRefLista: componente.autocompleteListarNombreRelacion,
        //                     servicio: ruta.relacionHttpService,
        //                     contexto,
        //                     nombreCampo: <%= nombreMayuscula %>Enum.campoRelacion,
        //                 }
        //                 componente.buscarAutocomplete(parametros);
        //             },
        //         }
        //     } as TipoCampoManti
    }
};