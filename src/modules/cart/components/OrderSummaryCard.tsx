"use client"

import { formatCurrencyToBolivians, tableClassNames } from '@/lib';

import { TableTitle } from '@/modules/shared';
import { Table, TableHeader, TableColumn, TableBody, TableCell, TableRow } from '@nextui-org/react';

export const OrderSummaryCard = () => {
    return (
        <Table
            classNames={tableClassNames}
            topContent={<TableTitle title='Resumen del pedido' description='Detalles del carrito' />}
            aria-label="Order summary table"
        >
            <TableHeader>
                <TableColumn>Descripcion</TableColumn>
                <TableColumn>Precio</TableColumn>
            </TableHeader>
            <TableBody>

                <TableRow>
                    <TableCell><span>SubTotal</span></TableCell>
                    <TableCell><span>{formatCurrencyToBolivians(480)}</span></TableCell>
                </TableRow>

                <TableRow>
                    <TableCell><span>Impuestos</span></TableCell>
                    <TableCell><span>{formatCurrencyToBolivians(30)}</span></TableCell>
                </TableRow>

                <TableRow>
                    <TableCell><span className='font-bold'>Total</span></TableCell>
                    <TableCell><span>{formatCurrencyToBolivians(510)}</span></TableCell>
                </TableRow>
            </TableBody>
        </Table>

    )
}