import { Embedded } from "./embedded";
import { HALObject } from "./halobject";
import { Links } from "./links";
import { Page } from "./page";

export class HALResponse<T extends HALObject> {

    public _embedded!: Embedded<T>;
    public _links!: Links;
    public page!: Page;

    constructor() {

    }
}