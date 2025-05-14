import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { UserController } from "./presentation/controllers/user.controller";
import { CreateUserUserCase } from "./application/use-cases/create-user.use-case";
import { UserRepository } from "./infrastructure/repositories/user.repository";

@Module({
    imports: [
        DatabaseModule
    ],
    exports: [
        UserRepository,
        CreateUserUserCase
    ],
    controllers: [UserController],
    providers: [
        UserRepository,
        CreateUserUserCase
    ]
})
export class UserModule { }