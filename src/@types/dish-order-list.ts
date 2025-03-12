import {IDishOrder} from "types/dish-order.ts";
import {IDish} from "types/dish.ts";

export interface IDishOrderList {
    dishOrderId: number;
    dishId: number;
    count: number;
    dishOrder: IDishOrder;
    dish: IDish;
}