"use server"

import { UserData } from "../interfaces/user-data";

export const createUser = async (user: string) => {

    const newUser = JSON.parse(user) as UserData;
    console.log({newUser})


}