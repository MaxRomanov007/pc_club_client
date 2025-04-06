import {IVideoCardProducer} from "types/pc/video-card-producer.ts";
import {IPcType} from "types/pc/pc-type.ts";

export interface IVideoCard {
    id: number;
    videoCardProducerId: number;
    model: string;
    video_card_producer: IVideoCardProducer;
    pcTypes: IPcType[];
}