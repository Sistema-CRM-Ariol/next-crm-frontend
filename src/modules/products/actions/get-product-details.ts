"use server"


import apiDb from "@/lib/apiDb"
import { handleActionError } from "@/lib";
import { Product } from "../interfaces/product.interface";



export const getProductDetails = async (slug: string) => {
    try {
        
        const { data } = await apiDb.get<{ product: Product }>(`/products/${ slug }`);
        console.log(data)
        return {
            data: data.product,
            error: null,
        };

    } catch (error) {
        return handleActionError(error)
    }
}