import {json, LoaderFunction, redirect} from "@remix-run/node";
import {<%= nombreMayuscula%>FindDto} from "~/http/<%= nombreGuiones%>/dto/<%= nombreGuiones%>-find.dto";
import {LoaderSetQueryparams} from "~/functions/http/loader-set-queryparams";
import {<%= nombreMayuscula%>InstanceHttp} from "~/http/<%= nombreGuiones%>/<%= nombreGuiones%>-instance.http";
import {<%= nombreMayuscula%>Class} from "~/http/<%= nombreGuiones%>/<%= nombreGuiones%>.class";
import {ObjetoSesionDto} from "~/urql/auth/dto/objeto-sesion.dto";
import {Permission} from "~/generated/graphql";
import {verificarSessionPermisos} from "~/functions/auth/verificar-session-permisos";
import {CONFIG} from "~/config";
import {getSession} from "~/sessions-redis.server";
import {ErrorHttp} from "~/classes/abstract.http";

export type <%= nombreMayuscula%>CrearEditarLoaderData = {
    registro?: <%= nombreMayuscula%>Class,
    error?: string,
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
    if(<%= nombreCamel %>Id){
        if (!Number.isNaN(+<%= nombreCamel %>Id) && +<%= nombreCamel %>Id > 0) {
            const respuestaFind = await <%= nombreMayuscula%>InstanceHttp.find({id: <%= nombreCamel %>Id});
            const error = respuestaFind as ErrorHttp;
            if (error.statusCode) {
                returnData.error = 'Error consultando registros';
            } else {
                const respuesta = respuestaFind as [<%= nombreMayuscula%>Class[], number];
                returnData.registro = respuesta[0][0];
            }
        }
    }
    const session = await getSession(
        request.headers.get("Cookie")
    );
    returnData.sesion = await session.get('user');
    return json(returnData);
};