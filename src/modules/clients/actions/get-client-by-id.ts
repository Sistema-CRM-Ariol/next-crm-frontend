"use server"

import apiDb from "@/lib/apiDb";
import { isAxiosError } from "axios";
import { IClient } from "../interfaces/client";


export const getClientById = async (id: string) => {
    try {
        
        const { data } = await apiDb.get<{ client: IClient}>(`/clients/${id}`);
        
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