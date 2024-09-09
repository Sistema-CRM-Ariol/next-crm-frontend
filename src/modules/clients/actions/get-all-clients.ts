"use server"


import apiDb from "@/lib/apiDb"
import { IClientsResponse } from "../interfaces/clients-response"

export const getAllClients = async (page: number = 1, limit: number = 10, search: string | undefined = undefined) => {
    try {
        const { data } = await apiDb.get<IClientsResponse>('/clients', {
            params: {
                page,
                limit,
                search: search && search
            }
        })
        return data
    } catch (error) {
        throw error;
    }
} 