"use client"
import Image from 'next/image';
import NotFoundImage from '@/assets/images/not-image.jpg';

import { TableTitle } from '@/modules/shared';
import { formatCurrencyToBolivians, tableClassNames } from '@/lib';
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import { CheckmarkBadge01Icon, Delete01Icon } from 'hugeicons-react';


export const ShoppingCartCard = () => {
    return (
        <div className='bg-white'>
            <Table
                classNames={tableClassNames}
                topContent={<TableTitle title='Carrito de compras' description='Gestion de marcar registradas' />}
                aria-label="Shopping cart card table"
            >
                <TableHeader>
                    <TableColumn>Producto</TableColumn>
                    <TableColumn>Precio</TableColumn>
                    <TableColumn>Quantity</TableColumn>
                    <TableColumn>Total</TableColumn>
                    <TableColumn>Acciones</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell
                            style={{ justifyItems: "start", display: "flex" }}
                            width={300}
                            className='flex items-center justify-start'
                        >
                            <Image
                                alt="Card background"
                                className="mx-auto object-cover rounded-xl"
                                src={NotFoundImage}
                                width={50}

                            />
                            <p>Nombre del producto</p>
                        </TableCell>
                        <TableCell>{formatCurrencyToBolivians(120)}</TableCell>
                        <TableCell>4u.</TableCell>
                        <TableCell>480</TableCell>
                        <TableCell>
                            <Button
                                size='sm'
                                isIconOnly
                                startContent={<Delete01Icon size={16} />}
                                color='danger'
                                radius='full'
                                variant='light'
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <div className='flex justify-end bg-white p-8'>
                <Button startContent={ <CheckmarkBadge01Icon/> } color='primary'>Checkout</Button>
            </div>
        </div>

    )
}
