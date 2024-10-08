import { CategoriesTable, getCategories, NewCategoryForm } from "@/modules/categories";
import { Metadata } from "next";


interface Params {
    searchParams: { [key: string]: number | string | undefined }
}

export default async function CategoriesPage({ searchParams }: Params) {

    const categoriesResponse = await getCategories(
        searchParams.page as number, 
        searchParams.limit as number, 
        searchParams.search as string
    );


    return (
        <>
            <section className="container pt-8">
                <NewCategoryForm/>
            </section>      
            <CategoriesTable categoriesResponse={ categoriesResponse }/>
        </>
    );
}



export const metadata: Metadata = {
    title: 'Categorias - CRM Ariol'
}