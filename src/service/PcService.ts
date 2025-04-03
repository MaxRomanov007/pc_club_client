import {IPcType} from "types/pc/pc-type.ts";
import axios from "axios";
import {IPcRoom} from "types/pc/pc-room.ts";
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

    static async getPCRooms(pcTypeID: number): Promise<IPcRoom[]> {
        const response = await axios.get<IPcRoom[]>(address + 'pc-rooms', {
            params: {
                type_id: pcTypeID,
            }
        })
        return response.data
    }
}