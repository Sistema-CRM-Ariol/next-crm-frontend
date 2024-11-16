"use client"
import { ChangeEvent, useState } from "react";
import { createUser } from "../actions/create-user";
import { UserData } from "../interfaces/user-data";


export const useNewUserForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    
    const [userData, setUserData] = useState<UserData>({} as UserData);
    const [permissions, setPermissions] = useState<Record<string, string[]>>({});


    const handleUserDataChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePermissionsChange = (module: string, actions: string[]) => {
        setPermissions((prev) => ({
            ...prev,
            [module]: actions,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setIsLoading(true);

        const formattedPermissions = Object.entries(permissions).map(([module, actions]) => ({
            module,
            actions,
        }));

        const newUser: UserData = {
            ...userData,
            permissions: formattedPermissions,
        };

        await createUser(JSON.stringify( newUser ))
        
        setIsLoading(false);

    };

    return {
        isLoading,
        handleSubmit,
        handleUserDataChange,
        handlePermissionsChange,
    }
}