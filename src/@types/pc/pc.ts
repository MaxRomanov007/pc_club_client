import {IPcRoom} from "types/pc/pc-room.ts";
import {IPcOrder} from "types/pc/order.ts";
import {IPcStatus} from "types/pc/pc-status.ts";
import {IPcType} from "types/pc/pc-type.ts";

export interface IPc {
    pc_id: number;
    pc_room__id: number;
    pc_type_id: number;
    pc_status_id: number;
    row: number;
    place: number;
    description: string;
    pc_room: IPcRoom;
    pc_type: IPcType;
    pc_status: IPcStatus;
    pc_orders: IPcOrder[];
}