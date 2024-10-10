import { NewClientForm, getClientById } from "@/modules/clients";
import { TitlePage } from "@/modules/shared";

interface Params {
    params: { id: string }
}


export default async function EditClientPage({ params }: Params) {

    const client = await getClientById(params.id);
    console.log(client)
    return (
        <>
            <TitlePage
                linkName="Volver"
                pathname="/admin/clients"
                subTitle="Edita la informacion del clietne."
                title="Editar información"

            />
            <NewClientForm />
        </>
    );
}