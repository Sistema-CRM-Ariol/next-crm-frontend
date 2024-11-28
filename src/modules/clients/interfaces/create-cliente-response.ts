import { IClientsResponse } from "./get-clients-response.interface";

export interface ICreateClientResponse {
    message: string;
    client:  IClientsResponse;
}
