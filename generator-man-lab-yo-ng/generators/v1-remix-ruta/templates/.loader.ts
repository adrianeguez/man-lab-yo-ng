import {json, LoaderFunction} from "@remix-run/node";
import {<%= nombreMayuscula %>FindDto} from "~/http/<%= nombreGuiones %>/dto/<%= nombreGuiones %>-find.dto";
import {LoaderSetQueryparams} from "~/functions/http/loader-set-queryparams";
import {LoaderSettearFindtoComun} from "~/functions/http/loader-settear-findto-comun";
import {SisHabilitadoEnum} from "~/enum/sis-habilitado.enum";
import {<%= nombreMayuscula %>InstanceHttp} from "~/http/<%= nombreGuiones %>/<%= nombreGuiones %>-instance.http";
import {eliminarUndNullVacio} from "~/functions/util/eliminar-und-null-vacio";
import {<%= nombreMayuscula %>Interface} from "~/http/<%= nombreGuiones %>/<%= nombreGuiones %>.interface";

export type <%= nombreMayuscula %>LoaderData = {
    registros?: [<%= nombreMayuscula %>Interface[], number],
    error?: string,
    mensaje?: string;
    findDto: <%= nombreMayuscula %>FindDto;
};

const permisos = [
    Permission.<%= nombreMayuscula%>Buscar,
];
export const <%= nombreMayuscula %>Loader: LoaderFunction = async (
    {
        request,
        params,
    }) => {
    const tienePermisos = await verificarSessionPermisos(request, permisos);
    if(!tienePermisos){
        return redirect(CONFIG.LOGOUT_URL)
    }
    const returnData: <%= nombreMayuscula %>LoaderData = {} as any;
    const requestUrl = request.url;
    const findDto: <%= nombreMayuscula %>FindDto = LoaderSetQueryparams(requestUrl) as <%= nombreMayuscula %>FindDto;
    LoaderSettearFindtoComun(findDto);
    const url = new URL(requestUrl);
    const id = url.searchParams.get('id');
    // Busqueda por ID
    if(id){
        if (!Number.isNaN(+id) && +id > 0) {
            findDto.id = +id;
        }
    } else {
        // Busqueda por otros parametros
        const busqueda = url.searchParams.get('busqueda');
        if (busqueda) {
            findDto.busqueda = busqueda;
        }
        findDto.sisHabilitado = url.searchParams.get("sisHabilitado") as unknown as SisHabilitadoEnum;
        findDto.sisCreado = url.searchParams.get("sisCreado") as unknown as string;
        findDto.sisModificado = url.searchParams.get("sisModificado") as unknown as string;
    }
    returnData.mensaje = url.searchParams.get("mensaje") as unknown as string;
    returnData.findDto = {...findDto};
    try {
        returnData.registros = await <%= nombreMayuscula %>InstanceHttp.find(eliminarUndNullVacio(findDto))
    } catch (error: any) {
        console.error({error, mensaje: 'Error consultando registros'});
        returnData.error = 'Error consultando registros';
    }
    return json(returnData);
};