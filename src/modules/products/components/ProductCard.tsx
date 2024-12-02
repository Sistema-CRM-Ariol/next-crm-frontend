"use client"

import NotFoundImage from '@/assets/images/not-image.jpg'
import { SimpleProduct } from "../interfaces/simple-product.interface"
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from 'next/image';
import { formatCurrencyToBolivians } from '../../../lib/format-currency-to-bolivians';
import { ShoppingCart01Icon } from 'hugeicons-react';



interface Props {
    product: SimpleProduct;
}

export const ProductCard = ({ product }: Props) => {
    return (
        <Card shadow='none' isPressable className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start justify-center">
                <p className="text-tiny uppercase font-bold">{ product.serialNumber }</p>
                <Image
                    alt="Card background"
                    className="mx-auto object-cover rounded-xl"
                    src={ NotFoundImage }
                    width={270}
                    
                />
            </CardHeader>
            <CardBody className="overflow-visible py-2 text-center">
                <h4 className="font-bold text-large">{ product.name }</h4>
                <small className="text-default-500">12 u.</small>
                <p className="text-large font-semibold text-primary-500">{ formatCurrencyToBolivians(product.priceSale) }</p>
                <Button 
                    as='div'
                    startContent={ <ShoppingCart01Icon size={18}/>}
                    color='primary'
                    variant='light'
                    className='max-w-max mx-auto mt-4'
                >
                    Agregar al carrito
                </Button>
            </CardBody>
        </Card>
    )
}
