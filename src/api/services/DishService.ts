import {IDish} from "types/pc/dish.ts";
import {api} from "@/api/instances";

export default class DishService {
    static async getDishes(limit: number, offset: number): Promise<IDish[]> {
        const response = await api.get<IDish[]>('dishes', {
            params: {
                limit: limit,
                offset: offset,
            }
        })
        return response.data
    }
}