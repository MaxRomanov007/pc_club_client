import {IDishOrderStatus} from "types/dish-order-status.ts";
import {IDishOrderList} from "types/dish-order-list.ts";

export interface IDishOrder {
    id: number;
    dishOrderStatusId: number;
    userId: number;
    cost: number;
    orderDate: Date;
    dishOrderStatus: IDishOrderStatus;
    dishOrderList: IDishOrderList[];
}