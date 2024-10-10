
import { fullInputWrapper } from '@/lib'

import { Search01Icon } from 'hugeicons-react'
import { Button, Input } from '@nextui-org/react'

export const CompanyTableHeader = () => {
    return (
        <form>
            <div className='mb-4'>
                <h1>Lista de empresas</h1>
                <p className='text-sm'>Empresas registradas y asociadas a tus clientes</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <div className='flex w-full'>
                        <Input
                            // value={searchInput}
                            // onChange={e => setSearchInput(e.target.value)}
                            classNames={fullInputWrapper}
                            placeholder="Buscar marca"
                            size="md"
                            className='max-w-sm w-full'

                        />
                        {/* <Link> */}
                            <Button
                                isIconOnly
                                // onPress={() => router.push(`/admin/inventory/brands?search=${searchInput}`)}
                                startContent={<Search01Icon size={16} />}
                            />
                        {/* </Link> */}

                    </div>
                </div>
            </div>
        </form>
    )
}
