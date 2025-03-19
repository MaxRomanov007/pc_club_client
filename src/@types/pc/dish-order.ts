import {IDishOrderStatus} from "types/pc/dish-order-status.ts";
import {IDishOrderList} from "types/pc/dish-order-list.ts";

export interface IDishOrder {
    id: number;
    dishOrderStatusId: number;
    userId: number;
    cost: number;
    orderDate: Date;
    dishOrderStatus: IDishOrderStatus;
    dishOrderList: IDishOrderList[];
}