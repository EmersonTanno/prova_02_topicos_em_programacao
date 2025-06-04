import { Module } from "@nestjs/common";
import { SignInUseCase } from "./application/use-case/sign-in.use-case";
import { UserRepository } from "../user/infrastructure/repositories/user.repository";
import { AuthController } from "./presentation/controllers/auth.controller";
import { UserModule } from "../user/user.module";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "./application/guards/auth.guard";

@Module({
    imports: [
        UserModule
    ],
    controllers: [
        AuthController
    ],
    exports: [],
    providers: [
        SignInUseCase,
    ]
})
export class AuthModule { }