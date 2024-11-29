import { TitlePage } from "@/modules/shared";
import { NewProductForm } from "@/modules/products";
import { getBrands } from "@/modules/brands";
import { getCategories } from "@/modules/categories";

export default async function NewProductPage() {

    const getBrandsPromise = getBrands(1, 100);
    const getCategoriesPromise = getCategories(1, 100);

    const [{ brands }, { categories }] = await Promise.all([getBrandsPromise, getCategoriesPromise]);

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