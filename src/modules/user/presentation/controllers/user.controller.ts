import { Body, Controller, Res } from "@nestjs/common";
import { ResponseObject } from "src/shared/presentation/response/response-object";
import { CreateUserDto } from "../dtos/create-user.dto";

@Controller('users')
export class UserController {
    constructor(

    ) { }

    public createUser(@Body() createUser: CreateUserDto, @Res() response: Response): Promise<ResponseObject> {

    }
}