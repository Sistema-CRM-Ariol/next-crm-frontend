import { ChartEvaluationIcon, CheckListIcon, Home01Icon, ProfileIcon, Settings02Icon, Task01Icon, UserIcon, UserMultipleIcon, icons } from 'hugeicons-react';


export const principalMenu = [
    {
        name: 'Dashboard',
        path: '/admin/dashboard',
        icon: <Home01Icon size={18}/>
    },
    {
        name: 'Tareas',
        path: '/admin/tasks',
        icon: <CheckListIcon size={18}/>
    },
]

export const aplicationsMenu = [
    {
        name: 'Inventarios',
        path: '/admin/inventory',
        icon: <Task01Icon size={18}/>,
        children: [
            {
                name: 'Productos',
                path: '/admin/inventory/products',
            },
            {
                name: 'Marcas',
                path: '/admin/inventory/brands',
            },
            {
                name: 'Categorias',
                path: '/admin/inventory/categories',
            },
            {
                name: 'Almacenes',
                path: '/admin/inventory/warehouses',
            },
            {
                name: 'Proveedores',
                path: '/admin/inventory/providers',
            },
        ]
    },
    {
        name: 'Ingresos/Salidas',
        path: '/admin/transfers',
        icon: <ChartEvaluationIcon size={18}/>,
        children: [
            {
                name: 'Ventas',
                path: '/admin/transfers/sales',
            },
            {
                name: 'Cotizaciones',
                path: '/admin/transfers/quotes',
            },
            {
                name: 'Compras',
                path: '/admin/transfers/purchases',
            }
        ]
    },
    {
        name: 'Contactos',
        path: '/admin/contacts',
        icon: <UserMultipleIcon size={18}/>,
        children: [
            {
                name: 'Contactos',
                path: '/admin/contacts/clients',
            },
            {
                name: 'Empresas',
                path: '/admin/contacts/companies',
            },
            {
                name: 'Leads',
                path: '/admin/contacts/leads',
            }
        ]
    },
    {
        name: 'Usuarios',
        path: '/admin/users',
        icon: <UserMultipleIcon size={18}/>,
        children: [
            {
                name: 'Miembros',
                path: '/admin/users',
            },
            {
                name: 'Agregar usuario',
                path: '/admin/users/new',
            }
        ]
    },

]

export const additionalMenu = [
    {
        name: 'Perfil',
        path: '/admin/profile',
        icon: <UserIcon size={18}/>
    },
    {
        name: 'Ajustes',
        path: '/admin/settings',
        icon: <Settings02Icon size={18}/>
    },
]