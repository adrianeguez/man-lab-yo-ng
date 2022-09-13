import {<%= nombreMayuscula %>TablaInterface} from "~/components/<%= nombreGuiones %>/interfaces/<%= nombreGuiones %>-tabla.interface";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {<%= nombreMayuscula %>MostrarEnum} from "~/components/<%= nombreGuiones %>/enums/<%= nombreGuiones %>-mostrar.enum";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Button} from "konsta/react";
import MostrarSisImagen from "~/components/imagenes/MostrarSisImagen";
import {motion} from "framer-motion";

export function <%= nombreMayuscula %>Tabla(props: <%= nombreMayuscula %>TablaInterface) {
    const {registros, dioClicBoton} = props;
    return (
        <>
            <TableContainer className={'shadow-md'}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow className={'tabla-cabecera'}>
                            <TableCell>ID</TableCell>
                            {/*<TableCell align="center">Descripcion</TableCell>*/}
                            {/*<TableCell align="center">Isbn</TableCell>*/}
                            {/*<TableCell align="center">Genero libro</TableCell>*/}
                            <TableCell align="center">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className={'tabla-body'}>
                        {registros.map((registro) => (
                            <TableRow
                                key={registro.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                className={registro.sisHabilitado ? '' : 'deshabilitado'}
                            >
                                <TableCell component="th" scope="row">
                                    {registro.id}
                                </TableCell>
                                {/*<TableCell align="right">*/}
                                {/*    <MostrarSisImagen registro={registro} claseCss={''}/>*/}
                                {/*    <br/>*/}
                                {/*    {registro.nombre}*/}
                                {/*</TableCell>*/}
                                {/*<TableCell align="right">{registro.descripcion}</TableCell>*/}
                                {/*<TableCell align="right">{registro.generoLibro}</TableCell>*/}
                                {/*<TableCell align="right">{registro.isbn}</TableCell>*/}
                                <TableCell align="right">
                                    <div className="flex">
                                        <div className="flex-none">
                                            <Button
                                                onClick={() => dioClicBoton && dioClicBoton(registro, <%= nombreMayuscula %>MostrarEnum.IconoOpciones)}>
                                                <MoreVertIcon/>
                                            </Button>
                                        </div>
                                        <div className="flex-none">
                                            <NavigateNextIcon
                                                className={'ml-4'}
                                                onClick={() => dioClicBoton && dioClicBoton(registro, <%= nombreMayuscula %>MostrarEnum.IconoNavegar)}/>
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}