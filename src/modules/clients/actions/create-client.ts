"use server"

import apiDb from "@/lib/apiDb";

import { ICreateClientResponse } from "@/modules/clients";
import { isAxiosError } from "axios";
import { revalidatePath } from "next/cache";


interface CreateClient{
    nombre: string;
    cargo: string;
    departamento: string;
    provincia: string;
    direccion: string;
    factura: string;
    nit: string;
}

export const createClient = async (client: CreateClient) => {
    try {
        
        const { data } = await apiDb.post<ICreateClientResponse>('/clients', client);

        revalidatePath('/admin/clients');

        return {
            data,
            error: null
        }

    } catch (error) {
        console.log(error);
        if( isAxiosError(error) ){
            return {
                error: error.response?.data.message,
                data: null
            }
        }

        throw error;
    }

}