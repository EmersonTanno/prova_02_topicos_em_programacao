import { UserModule } from "src/modules/user/user.module";
import { DataSource } from "typeorm";
import "dotenv/config";

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: process.env.DATABASE_HOST,
                port: parseInt(process.env.DATABASE_PORT),
                username: process.env.DATABASE_USERNAME,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE,
                schema: process.env.DATABASE_SCHEMA,
                entities: [
                    UserModule,
                ],
                synchronize: true,
            });

            return dataSource.initialize();
        },
    },
];