import { Module } from "@nestjs/common";
import { databaseProviders } from "./infrastructure/database.provider";

@Module({
    providers: [
        ...databaseProviders
    ],
    exports: [
        ...databaseProviders
    ]
})
export class DatabaseModule { }