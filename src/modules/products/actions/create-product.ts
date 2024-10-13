"use server"

import apiDb from "@/lib/apiDb"
import { isAxiosError } from "axios";


export const createProduct = async (formData: FormData) => {

    try {
    
        console.log(formData)    
        // const { data } = await apiDb.post('');

        return {
            data: {message: "Hola"}, 
            error: null
        }

    } catch (error) {

        console.log(error)

        if(isAxiosError(error)){
            return {
                data: null,
                error: error.response?.data.message,
            }
        }

        throw new Error("Error en el servidor, revisar logs del sistema")
    }
}