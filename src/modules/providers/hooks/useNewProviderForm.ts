"use client"

import React, { useState } from 'react'
import { toast } from 'sonner';

export const useNewProviderForm = () => {
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

        // const { data, error } = await createNewBrand(nombre.value, descripcion.value);

        // if (error) {
        //     nombre.value = "";
        //     descripcion.value = "";

        //     toast.error(error);
        //     setIsLoading(false);
        //     return;
        // }

        // nombre.value = "";
        // descripcion.value = "";

        // toast.success(data?.message || 'Marca registrada exitosamente');
        setIsLoading(false);
    };

    return {
        isLoading,
        handleSubmit,
    };
}
