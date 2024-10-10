"use server"
import { ClientTable, getAllClients, TotalClientsCard } from "@/modules/clients";



// export const revalidate = 300;
// export const dynamicParams = true;

export async function generateStaticParams(){
    
    const { meta } = await getAllClients();
    let pages: { page: number }[] = [];

    for (let index = 0; index < meta.page; index++) {
        console.log(index)
        pages = [...pages, { page: index }];
    }

    console.log({pages})
    return [
        1,
        2,
        3,
        4,
    ];
}


interface Params {
    params: { page: number }
}


export default async function ClientsPaginationPage({ params }: Params) {

    const clientResponse = await getAllClients(params.page as number);

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
