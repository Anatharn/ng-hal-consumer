import { HALObject } from "./halobject";

export class HALEmbedded<T extends HALObject> {

    [key: string]:T[];
}