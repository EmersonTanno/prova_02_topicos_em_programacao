import { IsArray, IsEmail, IsEmpty, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"
import { Roles } from "../../../../shared/application/enum/roles.enum"

export class UpdateUserDto {

    @IsString()
    @MinLength(3)
    @IsOptional()
    name: string

    @IsString()
    @IsEmail()
    @IsOptional()
    email: string

    @IsString()
    @MinLength(8)
    @IsOptional()
    password: string
}