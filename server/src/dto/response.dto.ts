import { HttpStatus } from "@nestjs/common";

export class ApplicationResponse {
    status : number;
    message : string;
    data : any;

    constructor(
        status : number = HttpStatus.OK,
        message : string,
        data = null
    ) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}