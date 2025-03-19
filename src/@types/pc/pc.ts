import {IPcRoom} from "types/pc/pc-room.ts";
import {IPcOrder} from "types/pc/pc-order.ts";
import {IPcStatus} from "types/pc/pc-status.ts";
import {IPcType} from "types/pc/pc-type.ts";

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