import {IDish} from "types/pc/dish.ts";

export interface IDishStatus {
    id: number;
    name: string;
    dishes: IDish[];
}