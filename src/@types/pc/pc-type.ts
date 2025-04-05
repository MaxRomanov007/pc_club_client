import {IImage} from "types/pc/image.ts";
import {IPc} from "types/pc/pc.ts";
import {IRAM} from "types/pc/ram.ts";
import {IMonitor} from "types/pc/monitor.ts";
import {IVideoCard} from "types/pc/video-card.ts";
import {IProcessor} from "types/pc/processor.ts";

export interface IPcType {
    pc_type_id: number;
    processor_id: number;
    video_card_id: number;
    monitor_id: number;
    ram_id: number;
    name: string;
    description: string;
    hour_cost: number;
    processor: IProcessor;
    video_card: IVideoCard;
    monitor: IMonitor;
    ram: IRAM;
    pcs: IPc[];
    pc_type_images: IImage[];
}