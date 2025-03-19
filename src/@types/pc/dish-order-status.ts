import {IDishOrder} from "types/pc/dish-order.ts";

export interface IDishOrderStatus {
    id: number;
    name: string;
    dishOrders: IDishOrder[];
}