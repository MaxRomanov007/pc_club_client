import {IMonitor} from "types/monitor.ts";

export interface IMonitorProducer {
    id: number;
    name: string;
    monitors: IMonitor[];
}