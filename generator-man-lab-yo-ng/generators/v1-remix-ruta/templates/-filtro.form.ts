import {CampoFormularioInterface} from "~/components/form/lib/interfaces/campo-formulario.interface";
import {FiltroComunForm} from "~/http/comun/filtro-comun.form";

export function <%= nombreMayuscula %>FiltroForm(): CampoFormularioInterface[] {
    return [
        ...FiltroComunForm(),
        // {
        //     formControlName: FiltrosComunesEnum.Busqueda,
        //     help: 'Busque por id',
        //     label: 'Busqueda',
        //     initialValue: '',
        //     actualValue: '',
        //     type: CampoFormularioType.Text,
        //     valid: false,
        //     placeholder: 'EJ: 1...',
        //     icon: <ManageSearchIcon/>,
        //     validators: {}
        // },
    ]
}