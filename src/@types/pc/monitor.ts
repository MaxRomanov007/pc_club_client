import {IMonitorProducer} from "types/pc/monitor-producer.ts";
import {IPcType} from "types/pc/pc-type.ts";

export interface IMonitor {
    id: number;
    monitorProducerId: number;
    model: string;
    monitorProducer: IMonitorProducer;
    pcTypes: IPcType[];
}