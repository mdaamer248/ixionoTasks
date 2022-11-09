import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService} from '@nestjs/config';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports : [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                type: 'postgres',
                // host:configService.get<string>('DATABASE_HOST'),
                // port:configService.get<number>('DATABASE_PORT'),
                // username:configService.get<string>('DATABASE_USERNAME'),
                // password:configService.get<string>('DATABASE_PASSWORD'),
                // database:configService.get<string>('DATABASE_NAME'),
                entities:['dist/**/*.entity{.ts,.js}'],
                synchronize: true,
                // dropSchema: true,
                url: process.env.DATABASE_URL,
                ssl: {
                   rejectUnauthorized: false,
                },
            })
        })
    ]
})
export class DataBaseModule {}