"use server"

import { handleActionError } from "@/lib";
import apiDb from "@/lib/apiDb"


export const getClientsStats = async (period: 'daily' | 'weekly' | 'monthly' | 'yearly') => {
    try {
        const { data } = await apiDb.get<{dates: string[], numberOfClients: number[]}>(`/clients/statistics/${period}`);


        return {
            data,
            error: null
        }
    } catch (error) {
        return handleActionError(error)
    }

}