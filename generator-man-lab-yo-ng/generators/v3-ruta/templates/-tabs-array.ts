import {Form<%= nombreMayuscula %>Enum} from '../../../form/form-<%= nombreGuiones %>.enum';


export const <%= nombreSoloMayusculas %>_TABS_ARRAY: () => TabsArrays[] = () => [
  {
    id: "<%= nombreGuiones %>-descripcion",
    label: "<%= nombreEspacioMayuscula %> descripción",
    icon: "pi pi-home",
    data: [
      // {
      //   showingName: "Descripcion",
      //   fieldName: Form<%= nombreMayuscula %>Enum.descripcion,
      //   type: DataTabsArrayEnum.string,
      // },
    ],
  },
  {
    id: "<%= nombreGuiones %>-datos-generales",
    label: "<%= nombreEspacioMayuscula %> datos generales",
    icon: "pi pi-money-bill",
    data: [
      // {
      //   showingName: "Nombre",
      //   fieldName: Form<%= nombreMayuscula %>Enum.nombre,
      //   type: DataTabsArrayEnum.string,
      // },
    ],
  },
];
