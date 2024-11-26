"use server"

import apiDb from "@/lib/apiDb";
import { cookies } from "next/headers"
import { LoginUserResponse } from "../interfaces/login-user-response.interface";


export const validateToken = async () => {
    
    const cookiesStore = await cookies();

    const token = cookiesStore.get('ARIOL_TOKEN')?.value;

    if( !token ){
        return false;
    }

    try {

        await apiDb.get<LoginUserResponse>('/auth/verify', {
            headers: {
                Authorization: 'Bearer ' + token,
            }
        })

        return true;

    } catch (error) {
        return false;
    }

}