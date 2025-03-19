import {IProcessor} from "types/pc/processor.ts";

export interface IProcessorProducer {
    id: number;
    name: string;
    processors: IProcessor[];
}