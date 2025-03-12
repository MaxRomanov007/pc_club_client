import {IDish} from "types/dish.ts";

export interface IDishStatus {
    id: number;
    name: string;
    dishes: IDish[];
}