import {IMonitor} from "types/pc/monitor.ts";

export interface IMonitorProducer {
    id: number;
    name: string;
    monitors: IMonitor[];
}