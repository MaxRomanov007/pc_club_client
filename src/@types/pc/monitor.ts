import {IMonitorProducer} from "types/pc/monitor-producer.ts";

export interface IMonitor {
    id: number;
    monitorProducerId: number;
    model: string;
    monitor_producer: IMonitorProducer;
}