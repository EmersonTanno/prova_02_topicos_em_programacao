import { Body, Controller, Post, Res } from "@nestjs/common";
import { SignInDto } from "../dtos/sign-in.dto";
import { Response } from "express";
import { SignInUseCase } from "../../application/use-case/sign-in.use-case";
import { Public } from "../../application/decorators/public.decorator";

@Controller('auth')
export class AuthController {

    constructor(
        private readonly signInUseCase: SignInUseCase
    ) { }

    @Public()
    @Post("signin")
    public async signIn(@Body() signInDto: SignInDto, @Res() response: Response) {
        const result = await this.signInUseCase.execute(signInDto);
        return response.status(result.status).send(result.data)
    }
}