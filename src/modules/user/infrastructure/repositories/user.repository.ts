import { BaseRepository } from "src/shared/infrastructure/repository/base-repository.repository";
import { UserEntity } from "../../application/entities/user.entity";
import { DataSource } from "typeorm";
import { Inject } from "@nestjs/common";

export class UserRepository extends BaseRepository<UserEntity> {
    constructor(
        @Inject("DATA_SOURCE")
        private dataSource: DataSource
    ) {
        super(
            dataSource,
            UserEntity
        )
    }
}