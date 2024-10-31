import { getProviders, NewProviderForm, ProviderTable } from "@/modules/providers";

interface Props {
    params: Promise<{ page: string }>
}

export default async function ProvidersPaginationPage( props: Props) {
    const params = await props.params

    const getProvidersResponse = await getProviders({page: params.page as string});

    return (
        <>
            <NewProviderForm/>
            <ProviderTable
                getProvidersResponse={ getProvidersResponse! }
            />
        </>
    );
}

export async function generateStaticParams() {

    let pages: number[] = [];

    const { meta } = await getProviders({});

    for (let index = 0; index < meta.lastPage; index++) {
        pages = [...pages, index + 1 ];
    }

    return pages.map(page => ({
        page: JSON.stringify(page)
    }));
}