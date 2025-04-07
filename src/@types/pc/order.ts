import {IPc} from "types/pc/pc.ts";
import {IDishOrderList} from "types/pc/dish-order-list.ts";

export interface IOrder {
    cost: number
    order_date: string
}

export interface IPcOrder extends IOrder{
    pc_order_id: number;
    id: number;
    code: string;
    duration: number;
    pc: IPc;
}

export interface IDishOrder extends IOrder{
    dish_order_id: number
    dish_order_list: IDishOrderList[]
}

export function isPcOrder(order: IOrder): order is IPcOrder {
    return (order as IPcOrder).pc_order_id !== undefined;
}

export function isDishOrder(order: IOrder): order is IDishOrder {
    return (order as IDishOrder).dish_order_id !== undefined;
}