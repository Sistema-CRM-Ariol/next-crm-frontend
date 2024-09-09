import { useRouter } from 'next/navigation'

import { fullInputWrapper } from '@/lib'

import { Button, Input } from '@nextui-org/react'
import { PlusSignIcon, Search01Icon } from 'hugeicons-react'
import { useState } from 'react'

export const ClientTableHeader = () => {

    const [searchInput, setSearchInput] = useState('')
    const router = useRouter();


    return (
        <>
            <div className='mb-4'>
                <h1 className='text-2xl mb-2'>Listado de Contactos</h1>
                <p className='text-sm'>Gestiona tus clientes y encuentra nuevas oportunidades de venta</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <div className='flex w-full'>
                        <Input
                            value={searchInput}
                            onChange={e => setSearchInput(e.target.value)}
                            classNames={fullInputWrapper}
                            placeholder="Buscar cliente"
                            size="md"
                            className='max-w-sm w-full'

                        />
                        <Button
                            isIconOnly
                            onPress={() => router.push(`/admin/clients?search=${searchInput}`)}
                            startContent={<Search01Icon size={16}/>}
                        />
                            
                    </div>
                    <div className="flex gap-3">
                        <Button
                            onPress={() => router.push('/admin/clients/new')}
                            endContent={<PlusSignIcon size={18} />}
                            size="md"
                            color='primary'
                        >
                            Agregar Cliente
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
