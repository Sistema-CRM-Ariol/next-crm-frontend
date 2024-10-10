import { Metadata } from "next";

import { ClientTable, TotalClientsCard, getAllClients } from "@/modules/clients";

interface Params {
    params: { slug: string }
    searchParams: { [key: string]: number | string | undefined }
}

export default async function ClientsPage({ params, searchParams }: Params) {

    const clientResponse = await getAllClients(searchParams.page as number, searchParams.limit as number, searchParams.search as string);

    return (
        <>
            <section className="container pt-8">
                <TotalClientsCard
                    totalClients={clientResponse.meta.total}
                />
            </section>
            <ClientTable
                clientResponse={clientResponse}
            />
        </>
    );
}

export const revalidate = 300;

export const metadata: Metadata = {
    title: 'Clientes - CRM Ariol'
}