import { HttpStatus, Injectable } from "@nestjs/common";
import { ResponseObject } from "src/shared/presentation/response/response-object";
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import { CreateUserDto } from "../../presentation/dtos/create-user.dto";

@Injectable()
export class CreateUserUserCase {

    constructor(
        private readonly userRepository: UserRepository
    ) { }

    public async execute(createUser: CreateUserDto): Promise<ResponseObject> {
        const exists = await this.userRepository.find({ where: { email: createUser.email } })[0];
        if (exists) {
            return new ResponseObject(HttpStatus.CONFLICT, { message: "User already exists." });
        }

        const newUser = this.userRepository.create(createUser);

        return await this.userRepository.save(newUser)
            .then(() => {
                return new ResponseObject(HttpStatus.CREATED, { message: "User created." })
            })
            .catch(() => {
                return new ResponseObject(HttpStatus.INTERNAL_SERVER_ERROR)
            })
    }
}