import {IPcType} from "types/pc-type.ts";
import {IRAMType} from "types/ram-type.ts";

export interface IRAM {
    id: number;
    ramTypeId: number;
    capacity: number;
    ramType: IRAMType;
    pcTypes: IPcType[];
}