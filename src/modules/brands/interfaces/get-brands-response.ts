import { Brand } from "./brand";

export interface GetBrandsResponse {
    brands: Brand[];
    meta:   Meta;
}


export interface Meta {
    total:    number;
    page:     number;
    lastPage: number;
}
