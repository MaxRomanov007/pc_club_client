import {IDishStatus} from "types/pc/dish-status.ts";
import {IDishImage} from "types/pc/dish-image.ts";
import {IDishOrderList} from "types/pc/dish-order-list.ts";

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