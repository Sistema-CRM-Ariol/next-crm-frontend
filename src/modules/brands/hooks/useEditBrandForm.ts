"use client"
import { useState } from 'react';

import { toast } from 'sonner';
import { editBrand, type Brand } from '@/modules/brands';

export const useEditBrandForm = (brand: Brand, onClose: () => void) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const form = e.target as HTMLFormElement;
        const nombre = form.elements.namedItem('nombre') as HTMLInputElement;
        const descripcion = form.elements.namedItem('descripcion') as HTMLInputElement;

        if (nombre.value.trim() === '') {
            toast.warning("Debe agregar un nombre");
            setIsLoading(false);
            return;
        }

        const { data, error } = await editBrand(brand.id, nombre.value, descripcion.value);

        if (error) {
            nombre.value = "";
            descripcion.value = "";

            toast.error("Ocurrió un error", {
                description: error
            });
            setIsLoading(false);
            return;
        }

        nombre.value = "";
        descripcion.value = "";

        toast.success(data?.message);
        setIsLoading(false);

        onClose();
    }

    return {
        isLoading,
        handleSubmit,
    };
}
