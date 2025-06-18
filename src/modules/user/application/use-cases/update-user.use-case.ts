import { HttpStatus, Injectable } from "@nestjs/common";
import { ResponseObject } from "src/shared/presentation/response/response-object";
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import { HashPasswordUseCase } from "./hash-password.use-case";
import { UpdateUserDto } from "../../presentation/dtos/update-user.dto";
import { Roles } from "src/shared/application/enum/roles.enum";

@Injectable()
export class UpdateUserProfileUseCase {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly hashPasswordUseCase: HashPasswordUseCase
    ) { }

    public async execute(
        idRequesting: string, 
        idTarget: string,   
        updateUserDto: UpdateUserDto,
        role: Roles     
    ): Promise<ResponseObject> {
        let isAdmin = false;
        if(role == Roles.ADMIN) isAdmin = true;

        if (!isAdmin && idRequesting !== idTarget) {
            return new ResponseObject(HttpStatus.FORBIDDEN, { message: "Access denied." });
        }

        const user = await this.userRepository.findOne({ where: { id: idTarget } });

        if (!user) {
            return new ResponseObject(HttpStatus.NOT_FOUND, { message: "User not found." });
        }

        if (updateUserDto.name) user.name = updateUserDto.name;
        if (updateUserDto.email) user.email = updateUserDto.email;
        if (updateUserDto.password) {
            user.password = await this.hashPasswordUseCase.execute(updateUserDto.password);
        }

        return await this.userRepository.save(user)
            .then(() => {
                return new ResponseObject(HttpStatus.OK, { message: "User updated." });
            })
            .catch(() => {
                return new ResponseObject(HttpStatus.INTERNAL_SERVER_ERROR, { message: "Error updating user." });
            });
    }
}
