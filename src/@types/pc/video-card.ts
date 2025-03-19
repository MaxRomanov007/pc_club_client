import {IVideoCardProducer} from "types/pc/video-card-producer.ts";
import {IPcType} from "types/pc/pc-type.ts";

export interface IVideoCard {
    id: number;
    videoCardProducerId: number;
    model: string;
    videoCardProducer: IVideoCardProducer;
    pcTypes: IPcType[];
}