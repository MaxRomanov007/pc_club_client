import {IPcType} from "types/pc/pc-type.ts";
import {IProcessorProducer} from "types/pc/processor-producer.ts";

export interface IProcessor {
    id: number;
    processorProducerId: number;
    model: string;
    processor_producer: IProcessorProducer;
    pcTypes: IPcType[];
}