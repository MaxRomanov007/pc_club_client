import {IRAM} from "types/pc/ram.ts";

export interface IRAMType {
    id: number;
    name: string;
    ram: IRAM[];
}