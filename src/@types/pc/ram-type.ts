import {IRAM} from "types/ram.ts";

export interface IRAMType {
    id: number;
    name: string;
    ram: IRAM[];
}