
export interface IClient {
    id:             string;
    nombre:         string;
    cargo:          string;
    departamento:   string;
    provincia:      string;
    direccion:      string;
    factura:        string;
    nit:            string;
    empresaId:      string | null;
    empresa:        string | null;
    correos:        string[],
    telefonos:      string[],
    createdAt:    Date;
    updatedAt:    Date;
}