import {IPc} from "types/pc.ts";

export interface IPcRoom {
    id: number;
    name: string;
    rows: number;
    places: number;
    description: string;
    pcs: IPc[];
}