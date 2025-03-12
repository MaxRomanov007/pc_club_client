import {IMonitorProducer} from "types/monitor-producer.ts";
import {IPcType} from "types/pc-type.ts";

export interface IMonitor {
    id: number;
    monitorProducerId: number;
    model: string;
    monitorProducer: IMonitorProducer;
    pcTypes: IPcType[];
}