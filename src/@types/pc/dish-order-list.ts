import {IDishOrder} from "types/pc/dish-order.ts";
import {IDish} from "types/pc/dish.ts";

export interface IDishOrderList {
    dishOrderId: number;
    dishId: number;
    count: number;
    dishOrder: IDishOrder;
    dish: IDish;
}