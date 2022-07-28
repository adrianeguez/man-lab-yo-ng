import {Button, ListItem} from "konsta/react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
    <%= nombreMayuscula %>MostrarInterface
} from "~/components/<%= nombreGuiones %>/interfaces/<%= nombreGuiones %>-mostrar.interface";
import {<%= nombreMayuscula %>MostrarEnum} from "~/components/<%= nombreGuiones %>/enums/<%= nombreGuiones %>-mostrar.enum";
import MostrarSisImagen from "~/components/imagenes/MostrarSisImagen";

export function <%= nombreMayuscula %>Mostrar(props: <%= nombreMayuscula %>MostrarInterface) {
    const {registro, dioClicBoton} = props;
    return (
        <>
            <ListItem
                className={'list-item-mlabs ' + (registro.sisHabilitado ? '' : 'deshabilitado')}
                media={<MenuBookIcon className={'text-yellow-500'}/>}
                title={(<>
                        <div className={'justify-items-stretch'}>
                            <div style={{float: 'left'}}>
                                {registro.id?.toString()} -
                                {/*{registro.nombre?.toString()}*/}
                            </div>
                            <div className={'ml-2'} style={{float: 'right'}}>
                                {dioClicBoton &&
                                    <Button
                                        onClick={() => dioClicBoton && dioClicBoton(registro, <%= nombreMayuscula %>MostrarEnum.IconoOpciones)}><MoreVertIcon/></Button>}
                            </div>
                        </div>
                    </>
                ) as any}
                subtitle={registro.id?.toString()}
                after={<> {dioClicBoton && (<NavigateNextIcon
                    className={'ml-4'}
                    onClick={() => dioClicBoton && dioClicBoton(registro, <%= nombreMayuscula %>MostrarEnum.IconoNavegar)}/>) } </>}
                text={
                    <div className={'grid grid-cols-2 gap-4'}>
                        <div>
                            <MostrarSisImagen registro={registro} claseCss={''}/>
                        </div>
                        <div>
                            {/*<p><strong>Nombre: </strong>{registro.nombre}</p>*/}
                            <p><strong>Fecha: </strong>{registro.sisCreado}</p>
                            <p><strong>Otro: </strong> Aqui mas info</p>
                        </div>
                        <div></div>
                    </div>
                }
            />
        </>
    )
}