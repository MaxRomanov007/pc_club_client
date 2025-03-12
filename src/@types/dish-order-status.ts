import {IDishOrder} from "types/dish-order.ts";

export interface IDishOrderStatus {
    id: number;
    name: string;
    dishOrders: IDishOrder[];
}