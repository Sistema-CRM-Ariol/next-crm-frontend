"use client"

import { fullInputWrapper } from '@/lib'
import { useNewBrandForm } from '@/modules/brands';

import { Button, Input } from '@nextui-org/react'

export const NewBrandForm = () => {

    const { handleSubmit, isLoading } = useNewBrandForm();

    return (
        <form onSubmit={ handleSubmit } className='brand__form'>

                <h2>Registra una nueva marca</h2>
            <div className='flex md:flex-row items-center justify-between gap-4'>

                <Input
                    classNames={fullInputWrapper}
                    label="Nombre"
                    placeholder='Agrega un nombre'
                    size='sm'
                    name='nombre'
                    isRequired
                />

                <Input
                    name='descripcion'
                    classNames={fullInputWrapper}
                    placeholder='Ingrese una pequeña descripción'
                    label="Descipcion"
                    size='sm'
                />
            </div>

            <Button
                type='submit'
                color='primary'
                isLoading={ isLoading }
                isDisabled={ isLoading }
            >
                Registrar Marca
            </Button>
        </form>
    )
}
