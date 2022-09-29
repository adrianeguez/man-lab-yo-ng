import {ActionFunction, redirect} from "@remix-run/node";
import {LoaderSetQueryparams} from "~/functions/http/loader-set-queryparams";
import {<%= nombreMayuscula %>InstanceHttp} from "~/http/<%= nombreGuiones %>/<%= nombreGuiones %>-instance.http";
import {<%= nombreMayuscula %>CreateDto} from "~/http/<%= nombreGuiones %>/dto/<%= nombreGuiones %>-create.dto";
import {convertirQueryParams} from "~/functions/http/convertir-query-params";
import {eliminarUndNullVacio} from "~/functions/util/eliminar-und-null-vacio";
import {<%= nombreMayuscula %>Enum} from "~/http/<%= nombreGuiones %>/form/<%= nombreGuiones %>.enum";
import {<%= nombreMayuscula %>UpdateDto} from "~/http/<%= nombreGuiones %>/dto/<%= nombreGuiones %>-update.dto";
import {FormularioComunEnum} from "~/enum/formulario-comun.enum";
import {SisHabilitadoCrearEnum} from "~/enum/sis-habilitado-crear.enum";
import {Permission} from "~/generated/graphql";
import {verificarSessionPermisos} from "~/functions/auth/verificar-session-permisos";
import {CONFIG} from "~/config";
import {ErrorHttp} from "~/classes/abstract.http";
import {<%= nombreMayuscula %>Class} from "~/http/<%= nombreGuiones %>/<%= nombreGuiones %>.class";

export const <%= nombreMayuscula %>CrearEditarAction: ActionFunction = async (dataFunctionArgs) => {
    // Cargar Queryparams
    const requestUrl = dataFunctionArgs.request.url;
    const findDto = LoaderSetQueryparams(requestUrl);

    // Generar Body
    const body = await dataFunctionArgs.request.formData();
    try {
        let respuesta!: <%= nombreMayuscula%>Class | ErrorHttp;
        const id = body.get('id');
        if (id) {
            const permisosCrear = [
                Permission.<%= nombreMayuscula%>Editar
            ];
            const tienePermisos = await verificarSessionPermisos(dataFunctionArgs.request, permisosCrear);
            if(!tienePermisos){
                return redirect(CONFIG.LOGOUT_URL)
            }
            const updateDto: <%= nombreMayuscula %>UpdateDto = {
                // nombre: body.get(<%= nombreMayuscula %>Enum.Nombre) as string,
            };
            try {
                respuesta = await <%= nombreMayuscula %>InstanceHttp.updateById(updateDto, +id);
            } catch (error) {
                console.error({error, mensaje: 'Error enviando datos'});
                respuesta = {statusCode: 500, message: 'Error en updateById'};
            }
        } else {
            const permisosEditar = [
                Permission.<%= nombreMayuscula%>Editar
            ];
            const tienePermisos = await verificarSessionPermisos(dataFunctionArgs.request, permisosEditar);
            if(!tienePermisos){
                return redirect(CONFIG.LOGOUT_URL)
            }
            const createDto: <%= nombreMayuscula %>CreateDto = {
                sisHabilitado: body.get(FormularioComunEnum.SisHabilitado) as unknown as SisHabilitadoCrearEnum,
                // nombre: body.get(<%= nombreMayuscula %>Enum.Nombre) as string,
            };
            try {
                respuesta = await <%= nombreMayuscula %>InstanceHttp.create(createDto);
            } catch (error) {
                console.error({error, mensaje: 'Error enviando datos'});
                respuesta = {statusCode: 500, message: 'Error en crear'};
            }
        }
        const error = respuesta as ErrorHttp;
        if (error.statusCode) {
            // fetch POST <%= nombreGuiones %> NESTJS
            return redirect(`/<%= nombreGuiones %>?${convertirQueryParams(eliminarUndNullVacio(findDto))}&mensaje=Registro creado`) as any;
        } else {
            console.error({error: error.message, mensaje: 'Error creando/editando registro'});
            return new Response(null as any, {status: error.statusCode}) as any;
        }
    } catch (error) {
        console.error({error, mensaje: 'Error gestionando registro'});
        return new Response(null as any, {status: 500}) as any;
    }
};