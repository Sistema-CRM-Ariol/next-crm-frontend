import { IClientsResponse } from "./clients-response";

export interface ICreateClientResponse {
    message: string;
    client:  IClientsResponse;
}
