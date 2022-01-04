
import { HALObject } from "./halobject";

export class Author extends HALObject{
    
    public firstName: String;
    public lastName: String;

    constructor(firstName: String, lastName: String){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
    }
}