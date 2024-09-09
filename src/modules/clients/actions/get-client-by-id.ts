"use server"

import apiDb from "@/lib/apiDb";
import { isAxiosError } from "axios";


export const getClientById = async (id: string) => {
    try {
        
        const { data } = await apiDb.get(`/clients/${id}`);
        
        return {
            data,
            error: null,
        }

    } catch (error) {
        console.log(error);

        if( isAxiosError(error) ){
            return {
                data: null,
                error: error.response?.data.message,
            }
        }

        throw error;
    }


}