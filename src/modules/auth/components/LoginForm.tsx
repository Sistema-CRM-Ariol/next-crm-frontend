"use client"
import { useState } from 'react'

import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button';
import { Checkbox, button } from '@nextui-org/react';
import { ViewIcon, ViewOffIcon } from '@/modules/shared';
import Link from 'next/link';

export const LoginForm = () => {

    const inputWrapper = [
        "shadow-none",
        "bg-athens-gray",
        "rounded-md",
        "outline-none",
        "group-data-[focus=true]:bg-athens-gray",
    ]
    const label = "font-medium"


    const [showPassword, setShowPassword] = useState(false);

    return (
        <form className='login__form w-full space-y-6'>

            <div className='mb-[3rem] text-center'>
                <h1 className="text-3xl mb-2 font-normal">Bienvenido de nuevo! 👋</h1>
                <p className='text-sm'>Ingresa tus credenciales y comienza a gestionar tu empresa</p>
            </div>

            <Input
                label="Correo electronico"
                name='email'
                type='email'
                classNames={{
                    inputWrapper,
                    label,
                }}
            />

            <Input
                name='password'
                size='sm'
                label="Contraseña"
                classNames={{
                    inputWrapper,
                    label
                }}
                type={showPassword ? "text" : "password"}
                endContent={
                    <Button variant='light' size='sm' isIconOnly onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword
                                ? (
                                    <ViewOffIcon />
                                )
                                : (
                                    <ViewIcon />
                                )
                        }
                    </Button>
                }
            />

            <div className='flex items-center justify-between'>
                <Checkbox defaultSelected size='sm'>Mantener sesion activa</Checkbox>
                <Link href='recovery' className='text-sm text-primary'>Recuperar contraseña</Link>
            </div>

            <Button
                fullWidth
                color='primary'
            >
                Iniciar Sesion
            </Button>

        </form>
    )
}
