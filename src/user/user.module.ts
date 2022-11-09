import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { ConfigService} from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [TypeOrmModule.forFeature([User]),
    JwtModule.register({
        // secret:   `${process.env.JWT_SECRET}`,
        secret: "Hi there!",
        signOptions: {
          expiresIn: '24h',
        },
      })],
    controllers: [UserController],
    providers: [UserService, ConfigService],
    
})
export class UserModule {}