import {
    CampoFormularioAccordeonInterface
} from "~/components/form/lib/interfaces/campo-formulario-accordeon.interface";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {<%= nombreMayuscula %>Enum} from "~/http/<%= nombreGuiones %>/form/<%= nombreGuiones %>.enum";
import {FormularioComunEnum} from "~/enum/formulario-comun.enum";

export function <%= nombreMayuscula %>AccordionForm(): CampoFormularioAccordeonInterface[] {
    return [
        {
            id: '<%= nombreGuiones %>-comunes',
            descripcion: 'Campos comunes',
            labelJSXElement: <p><SearchIcon className={'mr-2'}/>Comunes</p>,
            campos: [
                // <%= nombreMayuscula %>Enum.Nombre,
                // <%= nombreMayuscula %>Enum.Descripcion
            ],
            camposFormulario: [],
            accordeonAbierto: true,
        },
        {
            id: 'otros',
            descripcion: 'Campos especificos',
            labelJSXElement: (<p><CalendarMonthIcon className={'mr-2'}/>Fechas</p>),
            campos: [
                FormularioComunEnum.SisHabilitado,
                // <%= nombreMayuscula %>Enum.ISBN,
                // <%= nombreMayuscula %>Enum.GeneroLibro,
            ],
            camposFormulario: [],
            accordeonAbierto: true,
        },
    ];
}