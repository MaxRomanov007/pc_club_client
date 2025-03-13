import {IDish} from "types/dish.ts";

export interface IDishImage {
    id: number;
    dishId: number;
    isMain: boolean;
    path: string;
    dish: IDish;
}