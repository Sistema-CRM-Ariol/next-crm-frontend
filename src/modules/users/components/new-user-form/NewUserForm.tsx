
import { Button } from "@nextui-org/button";
import { UserDataForm, RolePermissionSelector } from '@/modules/users';
import { Divider } from "@nextui-org/react";


export const NewUserForm = () => {
    return (

        <section className='pt-8'>
            <form className='container bg-white p-6 pt-8 pb-10 rounded-sm'>

                <UserDataForm/>
                <Divider className="my-4"/>
                <RolePermissionSelector/>

                <Button
                    color='primary'
                    className='mt-8'
                    type='submit'
                >
                    Agergar Usuario
                </Button>
            </form>
        </section>
    )
}
