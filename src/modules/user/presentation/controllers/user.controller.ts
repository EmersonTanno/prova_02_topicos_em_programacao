import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { ResponseObject } from "src/shared/presentation/response/response-object";
import { CreateUserDto } from "../dtos/create-user.dto";
import { CreateUserUserCase } from "../../application/use-cases/create-user.use-case";
import { Response } from "express";
import { Roles } from "../../../../shared/application/enum/roles.enum";
import { RolesGuard } from "src/modules/auth/application/guards/Roles.guard";
import { Role } from "src/modules/auth/application/decorators/roles.decorator";
import { Public } from "src/modules/auth/application/decorators/public.decorator";
import { UpdateUserProfileUseCase } from "../../application/use-cases/update-user.use-case";
import { DeleteUserUseCase } from "../../application/use-cases/delete-user.use-case";
import { UpdateUserDto } from "../dtos/update-user.dto";
import { GetUserProfileUseCase } from "../../application/use-cases/get-user.use-case";
import { GetAllUserProfileUseCase } from "../../application/use-cases/getAll-user.use-case";

@Controller('users')
export class UserController {
    constructor(
        private readonly createUserUseCase: CreateUserUserCase,
        private readonly updateUserUseCase: UpdateUserProfileUseCase,
        private readonly deleteUserUsecase: DeleteUserUseCase,
        private readonly getUserUseCase: GetUserProfileUseCase,
        private readonly getAllUsersUseCase: GetAllUserProfileUseCase
    ) { }

    @Role(Roles.ADMIN)
    @Post("create")
    @UseGuards(RolesGuard)
    public async createUser(@Body() createUser: CreateUserDto, @Res() response: Response) {
        const result = await this.createUserUseCase.execute(createUser);
        return response.status(result.status).send(result.data);
    }

    @Public()
    @Post('adm_gen')
    public async admGen(@Res() response: Response) {
        const result = await this.createUserUseCase.execute({ email: 'admin@gmail.com', name: 'admin', password: '123', role: Roles.ADMIN })
        return response.status(result.status).send(result.data)
    }

    @Role(Roles.ADMIN)
    @Delete('delete/:id')
    @UseGuards(RolesGuard)
    public async deleteUser(@Param('id') id: string, @Res() response: Response) {
        const result = await this.deleteUserUsecase.execute(id);
        return response.status(result.status).send(result.data);
    }

    @Put('update/:id')
    @UseGuards(RolesGuard)
    public async updateUser(@Param('id') id: string, @Body() updateUser: UpdateUserDto, @Res() response: Response, @Req() req) {
        const result = await this.updateUserUseCase.execute(req.user.id, id, updateUser, req.user.role);
        return response.status(result.status).send(result.data);
    }

    @Get('get/:id')
    @UseGuards(RolesGuard)
    public async getUser(@Param('id') id: string, @Res() response: Response, @Req() req) {
        const result = await this.getUserUseCase.execute(req.user.id, id, req.user.role);
        return response.status(result.status).send(result.data);
    }

    @Role(Roles.ADMIN)
    @Get('get')
    @UseGuards(RolesGuard)
    public async getAllUser(@Param('id') id: string, @Res() response: Response, @Req() req) {
        const result = await this.getUserUseCase.execute(req.user.id, id, req.user.role);
        return response.status(result.status).send(result.data);
    }
}