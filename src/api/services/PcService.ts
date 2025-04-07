import {IPcType} from "types/pc/pc-type.ts";
import {api} from "@/api/instances";
import {IPc} from "types/pc/pc.ts";

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

    static async getPcs(type_id: number): Promise<IPc[]> {
        const response = await api.get('pcs', {
            params: {type_id}
        })
        return response.data
    }

    static async orderPc(pc_id: number, hour_count: number): Promise<string> {
        const response = await api.post<string>('order-pc', {
            pc_id, hour_count
        })
        return response.data
    }
}