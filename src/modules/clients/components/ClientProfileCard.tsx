import Link from 'next/link';

import { IClient } from '../interfaces/client'
import { Call02Icon, City01Icon, DirectionLeft01Icon, IdentityCardIcon, Mail01Icon, Message01Icon, SmartPhone01Icon } from 'hugeicons-react';
import { Button } from '@nextui-org/react';

interface Props {
    client: IClient;
}

export const ClientProfileCard = ({ client }: Props) => {
    return (
        <div className='client__card'>
            <h1 className='mb-6'>{client.nombre}</h1>
            <div className='space-y-4'>
                <p className='client__card--data'>
                    <IdentityCardIcon />
                    <span>{client.nit}</span>
                </p>
                {
                    client.correos.length === 0
                        ? (
                            <p className='client__card--data'>
                                <Mail01Icon />
                                <span>Sin correos</span>
                            </p>
                        )
                        : client.correos.map(correo => (
                            <p className='client__card--data' key={correo}>
                                <Mail01Icon />
                                <span>{correo}</span>
                            </p>
                        ))
                }

                <p className='client__card--data'>
                    <DirectionLeft01Icon />
                    <span>{client.direccion}</span>
                </p>

                <p className='client__card--data'>
                    <City01Icon />
                    <span>{client.departamento}</span>
                </p>

                {
                    client.telefonos.length === 0
                        ? (
                            <p className='client__card--data'>
                                <SmartPhone01Icon />
                                <span>Sin telefono</span>
                            </p>
                        )
                        : client.correos.map(correo => (
                            <p className='client__card--data' key={correo}>
                                <SmartPhone01Icon />
                                <span>{correo}</span>
                            </p>
                        ))
                }
            </div>

            <div className='flex gap-3 justify-center mt-6'>
                <Link href={`tel:${client.telefonos[0]}`}>
                    <Button color='primary' startContent={<Call02Icon size={20} />}>Llamar</Button>
                </Link>
                <Link href={`mailto:${client.correos[0]}`}>
                    <Button color='success' className='text-white' startContent={<Message01Icon size={20} />}>Mensaje</Button>
                </Link>
            </div>
        </div>

    )
}
