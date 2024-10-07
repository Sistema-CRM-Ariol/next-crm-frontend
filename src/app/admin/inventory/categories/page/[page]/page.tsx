import { CategoriesTable, getCategories, NewCategoryForm } from "@/modules/categories";


interface Params {
    params: { page: number }
}

export default async function CategoriesPaginationPage({ params }: Params) {

    const categoriesResponse = await getCategories(
        params.page as number, 
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