import {IPcType} from "types/pc/pc-type.ts";
import {IProcessorProducer} from "types/pc/processor-producer.ts";

export interface IProcessor {
    id: number;
    processorProducerId: number;
    model: string;
    processorProducer: IProcessorProducer;
    pcTypes: IPcType[];
}