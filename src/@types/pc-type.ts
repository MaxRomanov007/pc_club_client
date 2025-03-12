import {IPcTypeImage} from "types/pc-type-image.ts";
import {IPc} from "types/pc.ts";
import {IRAM} from "types/ram.ts";
import {IMonitor} from "types/monitor.ts";
import {IVideoCard} from "types/video-card.ts";
import {IProcessor} from "types/processor.ts";

export interface IPcType {
    id: number;
    processorId: number;
    videoCardId: number;
    monitorId: number;
    ramId: number;
    name: string;
    description: string;
    hourCost: number;
    processor: IProcessor;
    videoCard: IVideoCard;
    monitor: IMonitor;
    ram: IRAM;
    pcs: IPc[];
    pcTypeImages: IPcTypeImage[];
}