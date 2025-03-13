import {IPcRoom} from "types/pc-room.ts";
import {IPcOrder} from "types/pc-order.ts";
import {IPcStatus} from "types/pc-status.ts";
import {IPcType} from "types/pc-type.ts";

export interface IPc {
    id: number;
    pcRoomId: number;
    pcTypeId: number;
    pcStatusId: number;
    row: number;
    place: number;
    description: string;
    pcRoom: IPcRoom;
    pcType: IPcType;
    pcStatus: IPcStatus;
    pcOrders: IPcOrder[];
}