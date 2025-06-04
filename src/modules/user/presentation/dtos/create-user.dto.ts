import { IsArray, IsEmail, IsEmpty, IsEnum, IsNotEmpty, IsString, MinLength } from "class-validator"
import { Roles } from "../../../../shared/application/enum/roles.enum"

export class CreateUserDto {

    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    name: string

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @MinLength(8)
    @IsNotEmpty()
    password: string

    @IsEnum(Roles)
    @IsNotEmpty()
    roles: Roles
}