import { getCategories, NewCategoryForm } from "@/modules/categories";

export default async function CategoriesPage() {

    const categories = await getCategories();


    return (
        <>
            <section className="container pt-8">
                <NewCategoryForm/>
            </section>      
            {/* <BrandTable getBrandsResponse={ getBrandsResponse }/> */}
        </>
    );
}