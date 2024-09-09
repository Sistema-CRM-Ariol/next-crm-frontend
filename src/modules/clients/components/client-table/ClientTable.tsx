"use client"
import React from 'react';

import { IClientsResponse } from '@/modules/clients';

import { ClientTableHeader } from './ClientTableHeader';
import { ClientTableDeleteAction } from './ClientTableDeleteAction';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { ClientTablePagination } from './ClientTablePagination';


interface Props {
    clientResponse: IClientsResponse;
}

export const ClientTable = ({ clientResponse }: Props) => {

    const { clientes, meta } = clientResponse;

    const classNames = React.useMemo(() => ({
        wrapper: ["bg-white", "rounded-md", "shadow-none"],
        th: ["bg-transparent", "text-default-500", "border-b", "border-divider", "text-base"],
        tr: ["hover:bg-gray-400/10", "cursor-pointer", "transition-all"]
    }), []);

    return (
        <section className='container pt-8'>
            <Table
                topContent={<ClientTableHeader />}
                bottomContent={ <ClientTablePagination totalPages={ meta.lastPage } page={meta.page}/> }
                aria-label="Example table with custom cells, pagination and sorting"
                bottomContentPlacement="outside"
                checkboxesProps={{
                    classNames: {
                        wrapper: "after:bg-foreground after:text-background text-background",
                    },
                }}
                classNames={classNames}
            // topContentPlacement="outside"
            >
                <TableHeader>
                    <TableColumn>Nro Cliente</TableColumn>
                    <TableColumn>Nombre</TableColumn>
                    <TableColumn>Cargo</TableColumn>
                    <TableColumn>Empresa</TableColumn>
                    <TableColumn>Direccion</TableColumn>
                    <TableColumn>Telefonos</TableColumn>
                    <TableColumn>Correo</TableColumn>
                    <TableColumn>Factura</TableColumn>
                    <TableColumn>NIT</TableColumn>
                    <TableColumn>Acciones</TableColumn>
                </TableHeader>
                <TableBody emptyContent={"No users found"}>
                    {
                        clientes.map(cliente => (

                            <TableRow key={cliente.id} >
                                <TableCell className='max-w-[100px]'>
                                    <p className='line-clamp-1'>
                                        {cliente.id}
                                    </p>
                                </TableCell>
                                <TableCell>{cliente.nombre}</TableCell>
                                <TableCell>{cliente.cargo}</TableCell>
                                <TableCell>
                                    {cliente.empresa ? cliente.empresa : 'Sin asignar'}
                                </TableCell>
                                <TableCell>{cliente.direccion}</TableCell>
                                <TableCell>{cliente.telefonos[0] ? cliente.telefonos[0] : 'No agregados'}</TableCell>
                                <TableCell>{cliente.correos[0] ? cliente.correos[0] : 'No agregados'}</TableCell>
                                <TableCell>{cliente.factura}</TableCell>
                                <TableCell>{cliente.nit}</TableCell>
                                <TableCell>
                                    <ClientTableDeleteAction client={ cliente } />
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </section>
    )
}
