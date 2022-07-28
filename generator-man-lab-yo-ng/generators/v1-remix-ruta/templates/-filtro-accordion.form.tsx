import {AccordeonFiltroComunForm} from "~/http/comun/accordeon-filtro-comun.form";
import {CampoFormularioAccordeonInterface} from "~/components/form/lib/interfaces/campo-formulario-accordeon.interface";

export function <%= nombreMayuscula %>FiltroAccordionForm(): CampoFormularioAccordeonInterface[] {
    return [
        ...AccordeonFiltroComunForm(),
        // {
        //     id: 'comunes',
        //     descripcion: 'Busque los registros',
        //     labelJSXElement: <p><SearchIcon className={'mr-2'}/>Comunes</p>,
        //     campos: [FiltrosComunesEnum.Busqueda, FiltrosComunesEnum.SisHabilitado],
        //     camposFormulario: [],
        // },
    ]
}