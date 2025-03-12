import {IPcType} from "types/pc-type.ts";
import {IProcessorProducer} from "types/processor-producer.ts";

export interface IProcessor {
    id: number;
    processorProducerId: number;
    model: string;
    processorProducer: IProcessorProducer;
    pcTypes: IPcType[];
}