import { Module } from "@nestjs/common";
import { SignInUseCase } from "./application/use-case/sign-in.use-case";
import { UserRepository } from "../user/infrastructure/repositories/user.repository";
import { AuthController } from "./presentation/controllers/auth.controller";
import { UserModule } from "../user/user.module";

@Module({
    imports: [
        UserModule
    ],
    controllers: [
        AuthController
    ],
    exports: [],
    providers: [
        SignInUseCase
    ]
})
export class AuthModule { }