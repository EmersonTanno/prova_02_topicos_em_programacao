import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { UserController } from "./presentation/controllers/user.controller";
import { CreateUserUserCase } from "./application/use-cases/create-user.use-case";
import { UserRepository } from "./infrastructure/repositories/user.repository";
import { HashPasswordUseCase } from "./application/use-cases/hash-password.use-case";
import { UserService } from "./application/services/user.service";
import { DeleteUserUseCase } from "./application/use-cases/delete-user.use-case";
import { UpdateUserProfileUseCase } from "./application/use-cases/update-user.use-case";
import { GetUserProfileUseCase } from "./application/use-cases/get-user.use-case";
import { GetAllUserProfileUseCase } from "./application/use-cases/getAll-user.use-case";

@Module({
    imports: [
        DatabaseModule
    ],
    exports: [
        UserRepository,
        UserService,
        CreateUserUserCase,
    ],
    controllers: [UserController],
    providers: [
        UserRepository,
        CreateUserUserCase,
        HashPasswordUseCase,
        UserService,
        DeleteUserUseCase,
        UpdateUserProfileUseCase,
        GetUserProfileUseCase,
        GetAllUserProfileUseCase
    ]
})
export class UserModule { }