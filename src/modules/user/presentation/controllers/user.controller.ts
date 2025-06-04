import { Body, Controller, Post, Res, UseGuards } from "@nestjs/common";
import { ResponseObject } from "src/shared/presentation/response/response-object";
import { CreateUserDto } from "../dtos/create-user.dto";
import { CreateUserUserCase } from "../../application/use-cases/create-user.use-case";
import { Response } from "express";
import { Roles } from "../../../../shared/application/enum/roles.enum";
import { AuthGuard } from "src/modules/auth/application/guards/auth.guard";
import { RolesGuard } from "src/modules/auth/application/guards/Roles.guard";
import { Role } from "src/modules/auth/application/decorators/roles.decorator";
import { Public } from "src/modules/auth/application/decorators/public.decorator";

@Controller('users')
export class UserController {
    constructor(
        private readonly createUserUseCase: CreateUserUserCase
    ) { }

    @Role(Roles.ADMIN)
    @Post("create")
    public async createUser(@Body() createUser: CreateUserDto, @Res() response: Response) {
        const result = await this.createUserUseCase.execute(createUser);
        return response.status(result.status).send(result.data);
    }

    @Public()
    @Post('adm_gen')
    public async admGen(@Res() response: Response) {
        const result = await this.createUserUseCase.execute({ email: 'kaik@gmail.com', name: 'kaik', password: '123', roles: Roles.ADMIN })
        return response.status(result.status).send(result.data)
    }
}