import {<%= nombreMayuscula %>Enum} from "../../enums/<%= nombreMayuscula %>Enum";
import {<%= nombreMayuscula %>Select} from "./<%= nombreGuiones %>-select";
import {nombreModuloNest} from "../../../../nombre-modulo-nest";

const nombreModulo = nombreModuloNest
export const <%= nombreMayuscula %>CreateUpdateComunDto = (
    componente: AngularFormInterface,
    templates: any
)=>{
    return [
        {
            id: <%= nombreMayuscula %>Enum.nombre,
            key: <%= nombreMayuscula %>Enum.nombre,
            type: 'primeng-input-group',
            templateOptions: {
                required: true,
            },
            expressionProperties: {
                'templateOptions.label': componente.translateService.stream(nombreModulo + '.camposFormulario.nombre.nombre'),
                'templateOptions.placeholder': componente.translateService.stream(nombreModulo + '.camposFormulario.nombre.placeholder'),
                'templateOptions.description': componente.translateService.stream(nombreModulo + '.camposFormulario.nombre.ayuda'),
            },
        },
        // ejemplo campos
        // {
        //     id: <%= nombreMayuscula %>Enum.isbn,
        //     key: <%= nombreMayuscula %>Enum.isbn,
        //     type: 'primeng-input-group',
        //     templateOptions: {
        //         required: true,
        //     },
        //     expressionProperties: {
        //         'templateOptions.label': componente.translateService.stream(nombreModulo + '.camposFormulario.isbn.nombre'),
        //         'templateOptions.placeholder': componente.translateService.stream(nombreModulo + '.camposFormulario.isbn.placeholder'),
        //         'templateOptions.description': componente.translateService.stream(nombreModulo + '.camposFormulario.isbn.ayuda'),
        //     },
        // },
        // {
        //     id: <%= nombreMayuscula %>Enum.descripcion,
        //     key: <%= nombreMayuscula %>Enum.descripcion,
        //     type: 'primeng-input-group',
        //     templateOptions: {
        //     },
        //     expressionProperties: {
        //         'templateOptions.label': componente.translateService.stream(nombreModulo + '.camposFormulario.descripcion.nombre'),
        //         'templateOptions.placeholder': componente.translateService.stream(nombreModulo + '.camposFormulario.descripcion.placeholder'),
        //         'templateOptions.description': componente.translateService.stream(nombreModulo + '.camposFormulario.descripcion.ayuda'),
        //     },
        // },
        // {
        //     id: <%= nombreMayuscula %>Enum.generoLibro,
        //     key: <%= nombreMayuscula %>Enum.generoLibro,
        //     type: 'primeng-input-select',
        //     templateOptions: {
        //         required: true,
        //     },
        //     expressionProperties: {
        //         'templateOptions.label': componente.translateService.stream(nombreModulo + '.camposFormulario.generoLibro.nombre'),
        //         'templateOptions.placeholder': componente.translateService.stream(nombreModulo + '.camposFormulario.generoLibro.placeholder'),
        //         'templateOptions.description': componente.translateService.stream(nombreModulo + '.camposFormulario.generoLibro.ayuda'),
        //     },
        //     selectOpciones: {
        //         opciones: <%= nombreMayuscula %>Select.generoLibro,
        //         itemTemplateRef: templates.itemGeneroLibro,
        //         selectedItemTemplateRef: templates.selectedItemGeneroLibro,
        //     },
        // },
    ]
}
