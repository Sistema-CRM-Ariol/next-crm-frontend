import { Metadata } from "next";
import { NewProviderForm, ProviderTable, getProviders } from "@/modules/providers"

export default async function ProvidersPage() {

    const { data, error } = await getProviders();

    return (
        <>
            <NewProviderForm/>
            <ProviderTable
                providers={ data!.providers }
            />
        </>
    );
}


export const metadata: Metadata = {
    title: "Proveedores - Ariol S.A",
    description: "Gestiona los proveedores del sistema"
}