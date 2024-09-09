"use client"
import React, { useState } from 'react'

import { fullInputWrapper } from '@/lib'

import { Button, Input } from '@nextui-org/react'
import { Gps01Icon, IdentificationIcon, Invoice01Icon, UserIcon } from 'hugeicons-react'
import { createClient } from '../actions/create-client'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export const NewClientForm = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setIsLoading(true);

        const { nombre, cargo, departamento, provincia, direccion, factura, nit } = e.target as HTMLFormElement;

        const newClient = {
            nombre: nombre.value,
            cargo: cargo.value,
            departamento: departamento.value,
            provincia: provincia.value,
            direccion: direccion.value,
            factura: factura.value,
            nit: nit.value
        }

        const { error, data } = await createClient(newClient);

        if( Object.values(newClient).includes('') ){
            toast.error("Ocurrio un error", { 
                description: "Debe llenar los campos obligatorios"
            });
            setIsLoading(false);
            return;
        }

        if( error ){
            toast.error("Ocurrio un error", { 
                description: error
            });
            setIsLoading(false);
            return;
        }

        toast.success("Cliente registrado",{
            description: data?.message
        })

        setIsLoading(false);
        router.push('/admin/clients');

    }

    return (
        <section className='pt-8'>
            <form onSubmit={handleSubmit} className='container bg-white p-6 pt-8 pb-10 rounded-sm'>
                <div className="grid grid-cols-2 gap-y-8 gap-4">

                    <Input
                        size='lg'
                        isRequired
                        classNames={fullInputWrapper}
                        startContent={<UserIcon size={20} />}
                        placeholder='Ingresa un nombre'
                        label="Nombre"
                        name='nombre'
                        labelPlacement='outside'
                    />

                    <Input
                        isRequired
                        size='lg'
                        classNames={fullInputWrapper}
                        startContent={<IdentificationIcon size={20} />}
                        placeholder='Ingresa un Cargo'
                        label="Cargo"
                        name='cargo'
                        labelPlacement='outside'
                    />

                    <Input
                        size='lg'
                        isRequired
                        classNames={fullInputWrapper}
                        startContent={<Gps01Icon size={20} />}
                        placeholder='Ingresa un departamento del pais'
                        label="Departamento"
                        name='departamento'
                        labelPlacement='outside'
                    />

                    <Input
                        size='lg'
                        isRequired
                        classNames={fullInputWrapper}
                        startContent={<Gps01Icon size={20} />}
                        placeholder='Ingresa la provincia'
                        label="Provincia"
                        name="provincia"
                        labelPlacement='outside'
                    />

                    <Input
                        size='lg'
                        isRequired
                        classNames={fullInputWrapper}
                        startContent={<Gps01Icon size={20} />}
                        placeholder='Ingresa la direccion de residencia'
                        label="Dirección"
                        name="direccion"
                        labelPlacement='outside'
                    />

                    <Input
                        size='lg'
                        isRequired
                        classNames={fullInputWrapper}
                        startContent={<Invoice01Icon size={20} />}
                        placeholder='Ingresa un nombre de factura'
                        label="Nombre de Factura"
                        name="factura"
                        labelPlacement='outside'
                    />

                    <Input
                        size='lg'
                        isRequired
                        classNames={fullInputWrapper}
                        startContent={<IdentificationIcon size={20} />}
                        placeholder='Ingresa un NIT'
                        label="NIT"
                        name="nit"
                        labelPlacement='outside'
                    />
                </div>

                <Button
                    color='primary'
                    className='mt-8'
                    type='submit'
                    isLoading={ isLoading }
                    isDisabled={ isLoading }
                >
                    Registrar Cliente
                </Button>
            </form>
        </section>
    )
}
