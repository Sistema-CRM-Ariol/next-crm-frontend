"use client"
import { CheckboxGroup, Checkbox } from '@nextui-org/checkbox';

export const RolePermissionSelector = () => {

    const modules = [
        { name: "Clientes", value: "clients" },
        { name: "Ingresos", value: "incomes" },
        { name: "Salidas", value: "expenses" },
        { name: "Productos", value: "products" },
        { name: "Inventarios", value: "inventories" },
        { name: "Usuarios", value: "users" },
    ];

    const actions = [
        { name: "Ver/Listar", value: "read" },
        { name: "Crear", value: "create" },
        { name: "Editar", value: "update" },
        { name: "Eliminar", value: "remove" },
    ]

    return (
        <div>
            <h2>Selecciona los permisos del usuario</h2>
            <div className='role__permission__selector'>

                {
                    modules.map(module => (
                        <div key={module.value}>
                            <h3 className='font-semibold'>{module.name}</h3>

                            <CheckboxGroup
                                label="Selecciona las acciones permitidas"
                            >
                                {
                                    actions.map(action => (
                                        <Checkbox value={action.name} key={action.value}>
                                            {action.name}
                                        </Checkbox>
                                    ))
                                }
                            </CheckboxGroup>

                        </div>
                    ))
                }

            </div>

        </div>
    )
}
