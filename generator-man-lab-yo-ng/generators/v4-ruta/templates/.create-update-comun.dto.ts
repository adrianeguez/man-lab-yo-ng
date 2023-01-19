import {LibroBibliotecaEnum} from "../../enums/LibroBibliotecaEnum";
import {LibroBibliotecaSelect} from "./libro-biblioteca-select";
import {AngularFormInterface} from "../../../../../../interfaces/angular-form.interface";

export const LibroBibliotecaCreateUpdateComunDto = (
    componente: AngularFormInterface,
    templates: any
)=>{
    return [
        {
            id: LibroBibliotecaEnum.nombre,
            key: LibroBibliotecaEnum.nombre,
            type: 'primeng-input-group',
            templateOptions: {
                required: true,
            },
            expressionProperties: {
                'templateOptions.label': componente.translateService.stream('modulo-nest.camposFormulario.nombre.nombre'),
                'templateOptions.placeholder': componente.translateService.stream('modulo-nest.camposFormulario.nombre.placeholder'),
                'templateOptions.description': componente.translateService.stream('modulo-nest.camposFormulario.nombre.ayuda'),
            },
        },
        {
            id: LibroBibliotecaEnum.isbn,
            key: LibroBibliotecaEnum.isbn,
            type: 'primeng-input-group',
            templateOptions: {
                required: true,
            },
            expressionProperties: {
                'templateOptions.label': componente.translateService.stream('modulo-nest.camposFormulario.isbn.nombre'),
                'templateOptions.placeholder': componente.translateService.stream('modulo-nest.camposFormulario.isbn.placeholder'),
                'templateOptions.description': componente.translateService.stream('modulo-nest.camposFormulario.isbn.ayuda'),
            },
        },
        {
            id: LibroBibliotecaEnum.descripcion,
            key: LibroBibliotecaEnum.descripcion,
            type: 'primeng-input-group',
            templateOptions: {
            },
            expressionProperties: {
                'templateOptions.label': componente.translateService.stream('modulo-nest.camposFormulario.descripcion.nombre'),
                'templateOptions.placeholder': componente.translateService.stream('modulo-nest.camposFormulario.descripcion.placeholder'),
                'templateOptions.description': componente.translateService.stream('modulo-nest.camposFormulario.descripcion.ayuda'),
            },
        },
        {
            id: LibroBibliotecaEnum.generoLibro,
            key: LibroBibliotecaEnum.generoLibro,
            type: 'primeng-input-select',
            templateOptions: {
                required: true,
            },
            expressionProperties: {
                'templateOptions.label': componente.translateService.stream('modulo-nest.camposFormulario.generoLibro.nombre'),
                'templateOptions.placeholder': componente.translateService.stream('modulo-nest.camposFormulario.generoLibro.placeholder'),
                'templateOptions.description': componente.translateService.stream('modulo-nest.camposFormulario.generoLibro.ayuda'),
            },
            selectOpciones: {
                opciones: LibroBibliotecaSelect.generoLibro,
                itemTemplateRef: templates.itemGeneroLibro,
                selectedItemTemplateRef: templates.selectedItemGeneroLibro,
            },
        },
    ]
}
