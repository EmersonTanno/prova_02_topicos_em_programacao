import { HttpStatus } from "@nestjs/common";

export class ResponseObject {
    status: HttpStatus
    message?: string
    data?: any
}