// ACTIONS
export { deleteClient } from './actions/delete-client';
export { getAllClients } from "./actions/get-all-clients";
export { createClient } from './actions/create-client';
export { getClientById } from "./actions/get-client-by-id";

// COMPONENTS
export { ClientTable } from "./components/client-table/ClientTable";
export { NewClientForm } from './components/NewClientForm';
export { TotalClientsCard } from './components/customer-stadistics-cards/TotalClientsCard';


// INTERFACES
export type { IClient } from './interfaces/client';
export type { IClientsResponse } from './interfaces/clients-response';
export type { ICreateClientResponse } from './interfaces/create-cliente-response';




