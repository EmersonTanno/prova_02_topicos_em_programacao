import { HttpStatus, Injectable } from "@nestjs/common";
import { ResponseObject } from "src/shared/presentation/response/response-object";
import { UserRepository } from "../../infrastructure/repositories/user.repository";

@Injectable()
export class GetAllUserProfileUseCase {
    constructor(
        private readonly userRepository: UserRepository
    ) { }

    public async execute(
        idRequesting: string,
        idTarget: string,
        isAdmin: boolean
    ): Promise<ResponseObject> {

        const users = await this.userRepository.findAll();

        if (!users) {
            return new ResponseObject(HttpStatus.NOT_FOUND, { message: "Users not found." });
        }

        return new ResponseObject(HttpStatus.OK, { data: users });
    }
}
