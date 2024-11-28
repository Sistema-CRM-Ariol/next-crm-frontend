import { Metadata } from "next";

import { ClientTable, getClients, TotalClientsCard } from "@/modules/clients";

interface Props {
    searchParams: Promise<{ [key: string]: string | number | undefined }>
}

export default async function ClientsPage(props: Props) {
    
    const searchParams = await props.searchParams

    const clientResponse = await getClients(searchParams.page as number, searchParams.limit as number, searchParams.search as string);

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