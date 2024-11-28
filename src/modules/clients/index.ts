
// ACTIONS
export { deleteClient } from './actions/delete-client';
export { getClients } from "./actions/get-clients";
export { createClient } from './actions/create-client';
export { getClientById } from "./actions/get-client-by-id";
export { scheduleAppointmentWithClient } from './actions/schedule-appointment-with-client';

// INTERFACES
export type { IClient } from './interfaces/client';
export type { ICreateClientResponse } from './interfaces/create-cliente-response';
export type { GetClientsResponse } from './interfaces/get-clients-response.interface';
export type { SimpleClient } from './interfaces/simple-client.interface';


// COMPONENTS
export { ButtonScheduleAppointment } from './components/ButtonScheduleAppointment';
export { ClientTopPurchases } from './components/ClientTopPurchases';
export { ClientTable } from "./components/client-table/ClientTable";
export { NewClientForm } from './components/NewClientForm';
export { TotalClientsCard } from './components/customer-stadistics-cards/TotalClientsCard';
export { ClientProfileCard } from './components/ClientProfileCard';
export { CustomerTaskTable } from "./components/CustomerTaskTable";
export { ClientTableHeader } from './components/client-table/ClientTableHeader';




