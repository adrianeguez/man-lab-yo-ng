import {<%= nombreMayuscula %>Enum} from "../../enum/<%= nombreGuiones %>-enum";
import {<%= nombreMayuscula %>Select} from "./<%= nombreGuiones %>-select";

const nombreModulo = nombreModulo_LLENAR
export const <%= nombreMayuscula %>CreateUpdateComun = (
    componente: AngularFormInterface,
    templates: any
)=>{
    return [
        // EJEMPLO CAMPOS
        // INPUT:
        // {
        //     id: <%= nombreMayuscula %>Enum.nombreCampoEjemplo,
        //     key: <%= nombreMayuscula %>Enum.nombreCampoEjemplo,
        //     type: 'primeng-input-group',
        //     templateOptions: {
        //         required: true,
        //     },
        //     expressionProperties: {
        //         'templateOptions.label': componente.translateService.stream(nombreModulo + '.camposFormulario.nombreCampoEjemplo.nombre'),
        //         'templateOptions.placeholder': componente.translateService.stream(nombreModulo + '.camposFormulario.nombreCampoEjemplo.placeholder'),
        //         'templateOptions.description': componente.translateService.stream(nombreModulo + '.camposFormulario.nombreCampoEjemplo.ayuda'),
        //     },
        // },
        // SELECT:
        // {
        //     id: <%= nombreMayuscula %>Enum.nombreCampoLista,
        //     key: <%= nombreMayuscula %>Enum.nombreCampoLista,
        //     type: 'primeng-input-select',
        //     templateOptions: {
        //         required: true,
        //     },
        //     expressionProperties: {
        //         'templateOptions.label': componente.translateService.stream(nombreModulo + '.camposFormulario.nombreCampoLista.nombre'),
        //         'templateOptions.placeholder': componente.translateService.stream(nombreModulo + '.camposFormulario.nombreCampoLista.placeholder'),
        //         'templateOptions.description': componente.translateService.stream(nombreModulo + '.camposFormulario.nombreCampoLista.ayuda'),
        //     },
        //     selectOpciones: {
        //         opciones: <%= nombreMayuscula %>Select.nombreCampoLista,
        //         itemTemplateRef: templates.itemNombreCampoLista,
        //         selectedItemTemplateRef: templates.selectedItemNombreCampoLista,
        //     },
        // },
    ]
}
