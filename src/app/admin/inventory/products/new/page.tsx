import { TitlePage } from "@/modules/shared";
import { NewProductForm } from "@/modules/products";
import { getBrands } from "@/modules/brands";
import { getCategories } from "@/modules/categories";

export default async function NewProductPage() {

    const getBrandsPromise = getBrands();
    const getCategoriesPromise = getCategories();
    // const getBrandsPromise = getBrands();

    const [{ brands }, { categories }] = await Promise.all([getBrandsPromise, getCategoriesPromise]);
    console.log({brands, categories});


    return (
        <>  
            <TitlePage
                linkName="Volver"
                pathname="/admin/inventory/products"
                subTitle="Agrega nuevos productos y registralo en tus inventarios."
                title="Registro de Productos"

            />
            <NewProductForm 
                brands={ brands }
                categories={categories}
            />
        </>
    );
}