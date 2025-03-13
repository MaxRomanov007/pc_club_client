import {IPc} from "types/pc.ts";
import {IPcOrderStatus} from "types/pc-order-status.ts";

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