import {IPcOrder} from "types/pc-order.ts";

export interface IPcOrderStatus {
    id: number;
    name: string;
    pcOrders: IPcOrder[];
}