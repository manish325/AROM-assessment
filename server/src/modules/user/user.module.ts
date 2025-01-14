import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { AuthService } from '../auth/auth.service';

@Module({
    imports : [
        TypeOrmModule.forFeature([User])
    ],
    controllers : 
    [
        UserController,

    ],
    providers : [
        UserService
    ],
    exports : [UserService]
})
export class UserModule {}
