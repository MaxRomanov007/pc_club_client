import {IPcType} from "types/pc/pc-type.ts";
import {IRAMType} from "types/pc/ram-type.ts";

export interface IRAM {
    id: number;
    ramTypeId: number;
    capacity: number;
    ramType: IRAMType;
    pcTypes: IPcType[];
}