import {IDishStatus} from "types/dish-status.ts";
import {IDishImage} from "types/dish-image.ts";
import {IDishOrderList} from "types/dish-order-list.ts";

export interface IDish {
    id: number;
    dishStatusId: number;
    name: string;
    calories: number;
    cost: number;
    description: string;
    dishStatus: IDishStatus;
    dishImages: IDishImage[];
    dishOrderList: IDishOrderList[];
}