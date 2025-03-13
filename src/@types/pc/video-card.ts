import {IVideoCardProducer} from "types/video-card-producer.ts";
import {IPcType} from "types/pc-type.ts";

export interface IVideoCard {
    id: number;
    videoCardProducerId: number;
    model: string;
    videoCardProducer: IVideoCardProducer;
    pcTypes: IPcType[];
}