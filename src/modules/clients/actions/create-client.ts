"use server"
import { revalidatePath } from "next/cache";

import apiDb from "@/lib/apiDb";
import { handleActionError } from "@/lib";

import { ICreateClientResponse } from "@/modules/clients";


export interface CreateClientOptions {
    name:       string;
    position:        string;
    departament: string;
    province:    string;
    address:    string;
    invoice:      string;
    nit:          string;
    phones:       string[];
    emails:       string[];
    companyId:    string;
}


export const createClient = async (client: CreateClientOptions) => {
    try {
        
        const { data } = await apiDb.post<ICreateClientResponse>('/clients', client);

        revalidatePath('/admin/contacts/clients');

        return {
            data,
            error: null
        }

    } catch (error) {
        return handleActionError(error);
    }

}