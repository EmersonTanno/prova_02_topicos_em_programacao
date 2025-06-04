import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import { UserEntity } from "../entities/user.entity";

@Injectable()
export class UserService {
    constructor(
        private readonly repository: UserRepository
    ) { }

    public async findById(id: string): Promise<UserEntity | null> {
        return await this.repository.findById(id);
    }
}