import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { UserController } from "./presentation/controllers/user.controller";
import { CreateUserUserCase } from "./application/use-cases/create-user.use-case";
import { UserRepository } from "./infrastructure/repositories/user.repository";
import { HashPasswordUseCase } from "./application/use-cases/hash-password.use-case";
import { UserService } from "./application/services/user.service";

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
    ]
})
export class UserModule { }