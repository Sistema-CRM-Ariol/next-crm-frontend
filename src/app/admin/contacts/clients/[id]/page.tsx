
interface Props {
    params: Promise<{ id: string }>
}


export default async function ClientPage({ params }: Props) {

    const id = (await params).id;

    return (
        <div>
            <h1>{ id }</h1>
        </div>
    );
}