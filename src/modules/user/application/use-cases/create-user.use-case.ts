import { HttpStatus, Injectable } from "@nestjs/common";
import { ResponseObject } from "src/shared/presentation/response/response-object";
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import { CreateUserDto } from "../../presentation/dtos/create-user.dto";
import { HashPasswordUseCase } from "./hash-password.use-case";

@Injectable()
export class CreateUserUserCase {

    constructor(
        private readonly userRepository: UserRepository,
        private readonly hashPasswordUseCase: HashPasswordUseCase
    ) { }

    public async execute(createUser: CreateUserDto): Promise<ResponseObject> {
        const exists = await this.userRepository.findOne({ where: { email: createUser.email } });
        console.log(exists)
        if (exists) {
            return new ResponseObject(HttpStatus.CONFLICT, { message: "User already exists." });
        }

        const newUser = this.userRepository.create(createUser);
        newUser.password = await this.hashPasswordUseCase.execute(newUser.password);


        return await this.userRepository.save(newUser)
            .then(() => {
                return new ResponseObject(HttpStatus.CREATED, { message: "User created." })
            })
            .catch(() => {
                return new ResponseObject(HttpStatus.INTERNAL_SERVER_ERROR)
            })
    }
}