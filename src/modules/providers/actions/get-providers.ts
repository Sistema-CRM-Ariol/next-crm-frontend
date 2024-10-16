"use server"

import { isAxiosError } from "axios";

import apiDb from "@/lib/apiDb"
import { GetProvidersResponse } from "@/modules/providers";


export const getProviders = async () => {

    try {
        
        const { data } = await apiDb.get<GetProvidersResponse>("/providers");

        return {
            data, 
            error: null
        }


    } catch (error) {
        
        console.log(error)

        if( isAxiosError(error) ){
            return {
                error: error.response?.data.message,
                data: null
            }
        }

        throw error

    }

}