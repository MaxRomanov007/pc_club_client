import {IProcessor} from "types/processor.ts";

export interface IProcessorProducer {
    id: number;
    name: string;
    processors: IProcessor[];
}