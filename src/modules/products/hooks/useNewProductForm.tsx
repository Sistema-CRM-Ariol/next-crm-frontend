"use client"

import { useState } from "react";
import { toast } from "sonner";
import { createProduct } from "@/modules/products";

export const useNewProductForm = () => {


    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);

        const form = e.target as HTMLFormElement;
        const nombre = form.elements.namedItem('nombre') as HTMLInputElement;
        const descripcion = form.elements.namedItem('descripcion') as HTMLInputElement;
        
        const formData = new FormData(form);

        const { data, error } = await createProduct(formData);

        if (error) {
            nombre.value = "";
            descripcion.value = "";

            toast.error(error);
            setIsLoading(false);
            return;
        }

        toast.success(data?.message || 'Producto registrado exitosamente');
        setIsLoading(false);
    };

    return {
        isLoading,
        handleSubmit,
    };
}