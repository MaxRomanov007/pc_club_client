import {IVideoCard} from "types/pc/video-card.ts";

export interface IVideoCardProducer {
    id: number;
    name: string;
    videoCards: IVideoCard[];
}