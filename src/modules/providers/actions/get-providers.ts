"use server"

import { isAxiosError } from "axios";

import apiDb from "@/lib/apiDb"
import { GetProvidersResponse } from "@/modules/providers";



interface GetProvidersHeaders {
    limit?: number | undefined,
    page?: number | string | undefined, 
    search?: string | undefined
}

export const getProviders = async ({ page = 1, limit = 10, search= undefined }: GetProvidersHeaders ) => {


    try {
        
        const { data } = await apiDb.get<GetProvidersResponse>("/providers",{
            params: {
                page,
                limit,
                search
            }
        });
        console.log(data)
        return data


    } catch (error) {
        
        console.log(error)

        throw error

    }

}