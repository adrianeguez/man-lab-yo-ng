import {SortFieldInterface} from "~/interfaces/sort-field.interface";
import {SortOrderEnum} from "~/enum/sort-order.enum";
import {<%= nombreMayuscula %>Enum} from "~/http/<%= nombreGuiones %>/form/<%= nombreGuiones %>.enum";

export const <%= nombreMayuscula %>SortFields: SortFieldInterface[] = [
    // {
    //     sortOrder: SortOrderEnum.Asc,
    //     sortField: <%= nombreMayuscula %>Enum.Nombre,
    //     sortFieldLabel: 'Nombre'
    // }
];
