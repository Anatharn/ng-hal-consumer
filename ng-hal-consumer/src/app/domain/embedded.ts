import { HALObject } from "./halobject";

export class Embedded<T extends HALObject> {

    [key: string]:T[];
}