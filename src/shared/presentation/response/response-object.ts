import { HttpStatus } from "@nestjs/common";

export class ResponseObject {

    status: HttpStatus
    data: ResponseData

    constructor(status: HttpStatus, data?: ResponseData) {
        this.status = status
        this.data = data
    }
}

class ResponseData {
    message?: string
    data?: any

    constructor(data?: any, message?: string) {
        this.data = data
        this.message = message
    }
}