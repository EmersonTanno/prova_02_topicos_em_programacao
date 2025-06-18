import { HttpStatus, Injectable } from "@nestjs/common";
import { ResponseObject } from "src/shared/presentation/response/response-object";
import { UserRepository } from "../../infrastructure/repositories/user.repository";

@Injectable()
export class GetUserProfileUseCase {
    constructor(
        private readonly userRepository: UserRepository
    ) { }

    public async execute(
        idRequesting: string,
        idTarget: string,
        isAdmin: boolean
    ): Promise<ResponseObject> {

        if (!isAdmin && idRequesting !== idTarget) {
            return new ResponseObject(HttpStatus.FORBIDDEN, { message: "Access denied." });
        }

        const user = await this.userRepository.findOne({ where: { id: idTarget } });

        if (!user) {
            return new ResponseObject(HttpStatus.NOT_FOUND, { message: "User not found." });
        }

        const { password, ...userData } = user;

        return new ResponseObject(HttpStatus.OK, { data: userData });
    }
}
