import {IDish} from "types/pc/dish.ts";

export interface IDishOrderList {
    dish_order_id: number
    count: number
    dish: IDish
}