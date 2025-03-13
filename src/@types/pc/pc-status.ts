import {IPc} from "types/pc.ts";

export interface IPcStatus {
    id: number;
    name: string;
    pcs: IPc[];
}