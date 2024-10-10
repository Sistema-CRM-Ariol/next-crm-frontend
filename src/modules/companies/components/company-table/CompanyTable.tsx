"use client"
import { formatDate, tableClassNames } from '@/lib'

import { CompanyTableHeader } from '@/modules/companies'

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'

export const CompanyTable = () => {
    return (
        <section className='pt-8'>
            <Table
                className='container'
                classNames={tableClassNames}
                topContent={<CompanyTableHeader />}
                // bottomContent={<BrandTablePagination totalPages={meta.lastPage} page={meta.page} />}
                aria-label="Company table"
            >
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>Nombre</TableColumn>
                    <TableColumn>Descripción</TableColumn>
                    <TableColumn>Dirección</TableColumn>
                    <TableColumn>F. Creación</TableColumn>
                    <TableColumn>F. Actualización</TableColumn>
                    <TableColumn>Acciones</TableColumn>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell width={200}>
                            <p className='line-clamp-1'>X</p>
                        </TableCell>
                        <TableCell>X</TableCell>
                        <TableCell>
                            <p className='line-clamp-1'>Alguna descripcion X</p>
                        </TableCell>
                        <TableCell>
                            <p className='line-clamp-1'>Alguna direccion X</p>
                        </TableCell>
                        <TableCell>Alguna fecha X</TableCell>
                        <TableCell>Alguna fecha X</TableCell>
                        <TableCell>
                            Acciones
                        </TableCell>
                    </TableRow>


                </TableBody>
            </Table>


        </section>
    )
}
