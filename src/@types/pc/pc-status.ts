import {IPc} from "types/pc/pc.ts";

export interface IPcStatus {
    id: number;
    name: string;
    pcs: IPc[];
}