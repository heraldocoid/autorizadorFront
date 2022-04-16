import { Estado } from "./estado";
import { TipoTarjeta } from "./tipo-tarjeta";

export class Tarjeta{
    id?: number;
    numTarjeta?: string;
    estado?: Estado;
    titular?: string;
    numDocumento?: string;
    tipoTarjeta?: TipoTarjeta;
    telefono?: string;
}