import {IVideoCard} from "types/video-card.ts";

export interface IVideoCardProducer {
    id: number;
    name: string;
    videoCards: IVideoCard[];
}