import { HttpStatus, Injectable } from "@nestjs/common";
import { SignInDto } from "../../presentation/dtos/sign-in.dto";
import { UserRepository } from "src/modules/user/infrastructure/repositories/user.repository";
import * as bcrypt from 'bcrypt';
import { ResponseObject } from "src/shared/presentation/response/response-object";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class SignInUseCase {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService
    ) { }

    async execute(signIn: SignInDto) {
        const user = await this.userRepository.findOne({ where: { email: signIn.email } });

        if (!user) {
            return new ResponseObject(HttpStatus.FORBIDDEN);
        }

        const isMatch = await bcrypt.compare(signIn.password, user.password);

        if (!isMatch) {
            return new ResponseObject(HttpStatus.FORBIDDEN);
        }

        const payload = { sub: user.id, username: user.name, role: user.role };

        return new ResponseObject(HttpStatus.OK, { data: { access_token: await this.jwtService.signAsync(payload), } })

    }
}