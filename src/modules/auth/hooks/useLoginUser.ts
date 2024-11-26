"use client"
import { useState } from "react"
import { toast } from "sonner";

import { loginUser } from "@/modules/auth";


export const useLoginUser = () => {

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        setIsLoading(true);

        const form = e.target as HTMLFormElement;

        const email = form.elements.namedItem('email') as HTMLInputElement;
        const password = form.elements.namedItem('password') as HTMLInputElement;

        const { data, error } = await loginUser(email.value, password.value);

        if (error) {
            email.value = "";
            password.value = "";
            
            toast.error(error);
            setIsLoading(false);
            return;
        }

        toast.success(`Bienvenido ${ data?.user.name }`);
        
        setIsLoading(false);

    }


    return {
        isLoading,
        handleSubmit,
    }

}