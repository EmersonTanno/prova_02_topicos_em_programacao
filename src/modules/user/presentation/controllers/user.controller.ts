import { Body, Controller, Post, Res } from "@nestjs/common";
import { ResponseObject } from "src/shared/presentation/response/response-object";
import { CreateUserDto } from "../dtos/create-user.dto";
import { CreateUserUserCase } from "../../application/use-cases/create-user.use-case";
import { Response } from "express";

@Controller('users')
export class UserController {
    constructor(
        private readonly createUserUseCase: CreateUserUserCase
    ) { }

    @Post("create")
    public async createUser(@Body() createUser: CreateUserDto, @Res() response: Response) {
        const result = await this.createUserUseCase.execute(createUser);
        return response.status(result.status).send(result.data);
    }
}