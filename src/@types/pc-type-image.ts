import {IPcType} from "types/pc-type.ts";

export interface IPcTypeImage {
    id: number;
    pcTypeId: number;
    isMain: boolean;
    path: string;
    pcType: IPcType;
}