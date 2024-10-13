"use client"
import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';
import { Dollar01Icon, SecurityValidationIcon, TextIcon } from 'hugeicons-react';

import { fullInputWrapper } from '@/lib';
import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete';
import { Category } from '@/modules/categories';
import { Brand } from '@/modules/brands';
import { useNewProductForm } from '../../hooks/useNewProductForm';


interface Props {
    brands: Brand[];
    categories: Category[];
}

export const NewProductForm = ({ categories, brands }: Props) => {

    const { handleSubmit, isLoading } = useNewProductForm();

    return (
        <section className='pt-8'>
            <form onSubmit={ handleSubmit } className='container bg-white p-6 pt-8 pb-10 rounded-sm'>
                <div className="grid grid-cols-2 gap-y-8 gap-4">

                    <Input
                        size='lg'
                        isRequired
                        classNames={fullInputWrapper}
                        startContent={<TextIcon size={20} />}
                        placeholder='Ingresa el nombre del producto'
                        label="Nombre"
                        name='name'
                        labelPlacement='outside'
                    />

                    <Input
                        isRequired
                        size='lg'
                        classNames={fullInputWrapper}
                        startContent={<SecurityValidationIcon size={20} />}
                        placeholder='#ABC-123'
                        label="Numero de Serie"
                        name='serialNumber'
                        labelPlacement='outside'
                    />

                    <Textarea
                        size='lg'
                        isRequired
                        classNames={fullInputWrapper}
                        startContent={<TextIcon size={20} />}
                        placeholder='Agrega una descripción del producto'
                        label="Descripción"
                        name='description'
                        className='w-full col-span-2'
                        labelPlacement='outside'
                    ></Textarea>

                    <Input
                        size='lg'
                        type='number'
                        isRequired
                        classNames={fullInputWrapper}
                        startContent={<Dollar01Icon size={20} />}
                        placeholder='$100.00'
                        label="Precio de Compra"
                        name="pricePurchase"
                        labelPlacement='outside'
                    />
                    <Input
                        size='lg'
                        type='number'
                        isRequired
                        classNames={fullInputWrapper}
                        startContent={<Dollar01Icon size={20} />}
                        placeholder='$100.00'
                        label="Precio de Venta"
                        name="priceSale"
                        labelPlacement='outside'
                    />

                    <Autocomplete
                        label="Categorias"
                        labelPlacement='outside'
                        size='lg'
                        placeholder="Selecciona una categoria"
                        defaultItems={categories}
                        name='categoryId'
                    >
                        {(category) => (
                            <AutocompleteItem value={category.id} key={category.id}>
                                {category.name}
                            </AutocompleteItem>
                        )}

                    </Autocomplete>

                    <Autocomplete
                        label="Marcas"
                        labelPlacement='outside'
                        size='lg'
                        placeholder="Selecciona la marca"
                        defaultItems={brands}
                        
                    >
                        {(brand) => (
                            <AutocompleteItem key={brand.id} value={brand.id}>
                                {brand.nombre}
                            </AutocompleteItem>
                        )}

                    </Autocomplete>
                </div>

                <Button
                    color='primary'
                    className='mt-8'
                    type='submit'
                    isLoading={isLoading}
                    isDisabled={isLoading}
                >
                    Registrar Producto
                </Button>
            </form>
        </section>
    )
}
