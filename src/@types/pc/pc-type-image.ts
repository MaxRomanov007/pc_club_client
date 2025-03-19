import {IPcType} from "types/pc/pc-type.ts";

export interface IPcTypeImage {
    pc_type_image_id: number;
    pc_type_id: number;
    is_main: boolean;
    path: string;
    pc_type: IPcType;
}