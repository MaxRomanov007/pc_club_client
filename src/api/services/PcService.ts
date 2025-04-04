import {IPcType} from "types/pc/pc-type.ts";
import {IPcRoom} from "types/pc/pc-room.ts";
import {api, apiWithAuth} from "@/api/instances";

export default class PcService {
    static async getPCTypes(limit: number, offset: number): Promise<IPcType[]> {
        const response = await api.get<IPcType[]>('pc-types', {
            params: {
                limit: limit,
                offset: offset,
            }
        })
        return response.data
    }

    static async getPCType(id: number): Promise<IPcType> {
        const response = await api.get<IPcType>('pc-types/' + id)
        return response.data
    }

    static async getPCRooms(pcTypeID: number): Promise<IPcRoom[]> {
        const response = await api.get<IPcRoom[]>('pc-rooms', {
            params: {
                type_id: pcTypeID,
            }
        })
        return response.data
    }

    static async orderPc(pc_id: number, hour_count: number): Promise<string> {
        const response = await apiWithAuth.post<string>('order-pc', {
            pc_id, hour_count
        })
        return response.data
    }
}