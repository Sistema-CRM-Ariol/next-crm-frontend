import { IClient } from "./client";

export interface IClientsResponse {
    clientes: IClient[];
    meta:     Meta;
}


interface Meta {
    total:    number;
    page:     number;
    lastPage: number;
}
