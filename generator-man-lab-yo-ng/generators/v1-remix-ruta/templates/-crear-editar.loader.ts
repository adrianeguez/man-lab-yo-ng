import {json, LoaderFunction} from "@remix-run/node";
import {<%= nombreMayuscula%>FindDto} from "~/http/<%= nombreGuiones%>/dto/<%= nombreGuiones%>-find.dto";
import {LoaderSetQueryparams} from "~/functions/http/loader-set-queryparams";
import {<%= nombreMayuscula%>InstanceHttp} from "~/http/<%= nombreGuiones%>/<%= nombreGuiones%>-instance.http";
import {<%= nombreMayuscula%>Interface} from "~/http/<%= nombreGuiones%>/<%= nombreGuiones%>.interface";

export type <%= nombreMayuscula%>CrearEditarLoaderData = {
    registro?: <%= nombreMayuscula%>Interface,
    findDto: <%= nombreMayuscula%>FindDto; // Guardamos para devolver a la ruta anterior los query params
    sesion?: ObjetoSesionDto;
};

const permisos = [
    Permission.<%= nombreMayuscula%>Crear,
    Permission.<%= nombreMayuscula%>Editar
];
export const <%= nombreMayuscula%>CrearEditarLoader: LoaderFunction = async (
    {
        request,
        params,
    }) => {
    const tienePermisos = await verificarSessionPermisos(request, permisos, false);
    if(!tienePermisos){
        return redirect(CONFIG.LOGOUT_URL)
    }
    const returnData: <%= nombreMayuscula%>CrearEditarLoaderData = {} as any;
    const {<%= nombreCamel %>Id} = params;
    const requestUrl = request.url;
    const findDto: <%= nombreMayuscula%>FindDto = LoaderSetQueryparams(requestUrl) as <%= nombreMayuscula%>FindDto;
    returnData.findDto = findDto
    if (!Number.isNaN(+<%= nombreCamel %>Id) && +<%= nombreCamel %>Id > 0) {
        const registro = await <%= nombreMayuscula%>InstanceHttp.find({id: <%= nombreCamel %>Id});
        returnData.registro = registro[0][0];
    }
    const session = await getSession(
        request.headers.get("Cookie")
    );
    returnData.sesion = await session.get('user');
    return json(returnData);
};