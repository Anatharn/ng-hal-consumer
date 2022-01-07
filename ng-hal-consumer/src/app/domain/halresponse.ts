import { HALEmbedded } from "./halembedded";
import { HALObject } from "./halobject";
import { HALLinks } from "./hallinks";
import { HALPage } from "./halpage";

export class HALResponse<T extends HALObject> {

    public _embedded!: HALEmbedded<T>;
    public _links!: HALLinks;
    public page!: HALPage;

    constructor() {

    }
}