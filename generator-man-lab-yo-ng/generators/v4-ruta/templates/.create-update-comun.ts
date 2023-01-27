import {<%= nombreMayuscula %>Enum} from "../../enum/<%= nombreGuiones %>-enum";
import {<%= nombreMayuscula %>Select} from "./<%= nombreGuiones %>-select";

export const <%= nombreMayuscula %>CreateUpdateComun = (
    componente: <%= nombreMayuscula %>CreateDtoComponent | <%= nombreMayuscula %>UpdateDtoComponent,
    templates: { [key in string]: TemplateRef<any> },
    // esCrear = false, // Puede anadirse para casos mas complejos
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
        //         'templateOptions.label': componente.translateService.stream(componente.ruta<%= nombreMayuscula %>TranslationConstante.nombreCampoEjemplo.nombre),
        //         'templateOptions.placeholder': componente.translateService.stream(componente.ruta<%= nombreMayuscula %>TranslationConstante.nombreCampoEjemplo.placeholder'),
        //         'templateOptions.description': componente.translateService.stream(componente.ruta<%= nombreMayuscula %>TranslationConstante.nombreCampoEjemplo.ayuda'),
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
        //         'templateOptions.label': componente.translateService.stream(componente.ruta<%= nombreMayuscula %>TranslationConstante.nombreCampoLista.nombre),
        //         'templateOptions.placeholder': componente.translateService.stream(componente.ruta<%= nombreMayuscula %>TranslationConstante.nombreCampoLista.placeholder'),
        //         'templateOptions.description': componente.translateService.stream(componente.ruta<%= nombreMayuscula %>TranslationConstante.nombreCampoLista.ayuda'),
        //     },
        //     selectOpciones: {
        //         opciones: <%= nombreMayuscula %>Select.nombreCampoLista,
        //         itemTemplateRef: templates.itemNombreCampoLista,
        //         selectedItemTemplateRef: templates.selectedItemNombreCampoLista,
        //     },
        // },
    ]
}
