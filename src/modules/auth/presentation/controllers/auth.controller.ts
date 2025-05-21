import { Body, Controller, Post, Res } from "@nestjs/common";
import { SignInDto } from "../dtos/sign-in.dto";
import { Response } from "express";

@Controller('auth')
export class AuthController {

    @Post("signin")
    public async signIn(@Body() signInDto: SignInDto, @Res() response: Response) {

    }
}