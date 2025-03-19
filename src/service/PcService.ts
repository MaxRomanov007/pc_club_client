import {IPcType} from "types/pc/pc-type.ts";
import axios from "axios";
const address = import.meta.env.VITE_API_ADDRESS;

export default class PcService {
    static async getPCTypes(limit: number, offset: number): Promise<IPcType[]> {
        const response = await axios.get<IPcType[]>(address + 'pc-types', {
            params: {
                limit: limit,
                offset: offset,
            }
        })
        return response.data
    }

    static async getPCType(id: number): Promise<IPcType> {
        const response = await axios.get<IPcType>(address + 'pc-types/' + id)
        return response.data
    }
}