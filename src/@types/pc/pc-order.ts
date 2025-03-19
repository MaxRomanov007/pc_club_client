import {IPc} from "types/pc/pc.ts";
import {IPcOrderStatus} from "types/pc/pc-order-status.ts";

export interface IPcOrder {
    id: number;
    userId: number;
    pcId: number;
    pcOrderStatusId: number;
    code: string;
    cost: number;
    startTime: Date;
    duration: number;
    actualEndTime: Date;
    orderDate: Date;
    pc: IPc;
    pcOrderStatus: IPcOrderStatus;
}