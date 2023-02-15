import {
    <%= nombreMayuscula %>RespuestaBusquedaDto,
    ArchivoSecundarioRespuestaDto,
} from "~/generated/api-solo-back";

export class <%= nombreMayuscula %>Class implements <%= nombreMayuscula %>RespuestaBusquedaDto{
    id!: number;
    dto!: <%= nombreMayuscula %>RespuestaBusquedaDto;
    sisArchivo?: ArchivoSecundarioRespuestaDto | null;
    sisCreado!: string;
    sisImagen?: ArchivoSecundarioRespuestaDto | null;
    sisHabilitado!: 1 | 0;
    sisModificado!: string;
    // <%= nombreMayuscula %>RespuestaBusquedaDto es generado en el backend
    // Campos de la entidad
    // nombreCampoOpcional?: string;
    // nombreCampoRequerido!: string;
    // nombreRelacionRequerida!: ClaseRelacionRequeridaClass;
    // nombreRelacionOpcional?: ClaseRelacionOpcionalClass;
    // otras propiedades del frontend
    // propiedadFrontendRequerida: string;
    // propiedadFrontendOpcional: string;

    constructor(dto: <%= nombreMayuscula %>RespuestaBusquedaDto) {
        this.id = dto.id;
        this.dto = dto;
        this.sisArchivo = dto.sisArchivo;
        this.sisCreado = dto.sisCreado;
        this.sisImagen = dto.sisImagen;
        this.sisHabilitado = dto.sisHabilitado;
        this.sisModificado = dto.sisModificado;
        // Campos de la entidad
        // this.nombreCampoOpcional = dto.nombreCampoOpcional;
        // this.nombreCampoRequerido = dto.nombreCampoRequerido;
        // this.nombreRelacionRequerida = new ClaseRelacionRequeridaClass(dto.nombreCampoRequerido);
        // this.nombreRelacionOpcional = dto.nombreRelacionOpcional ? new ClaseRelacionOpcionalClass(dto.nombreCampoRequerido) : undefined;
        // this.propiedadFrontendRequerida = dto.nombreCampoOpcional.toUpperCase(); // aqui generamos el campo
        // this.nombreCampoOpcional = dto.nombreCampoOpcional ? dto.nombreCampoOpcional : dto.nombreCampoOpcional.toUpperCase(); // aqui generamos el campo
    }

    // Pueden haber metodos para crear campos
    // metodoCrearCampo(){
    //     // logica crear campo
    // }
}