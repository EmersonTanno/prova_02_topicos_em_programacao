import { HttpStatus, Injectable } from "@nestjs/common";
import { ResponseObject } from "src/shared/presentation/response/response-object";
import { UserRepository } from "../../infrastructure/repositories/user.repository";

@Injectable()
export class DeleteUserUseCase {
    constructor(
        private readonly userRepository: UserRepository
    ) { }

    public async execute(id: string): Promise<ResponseObject> {
        const user = await this.userRepository.findOne({ where: { id } });

        if (!user) {
            return new ResponseObject(HttpStatus.NOT_FOUND, { message: "User not found." });
        }

        return await this.userRepository.delete(id)
            .then(() => {
                return new ResponseObject(HttpStatus.OK, { message: "User deleted." });
            })
            .catch(() => {
                return new ResponseObject(HttpStatus.INTERNAL_SERVER_ERROR, { message: "Error deleting user." });
            });
    }
}
