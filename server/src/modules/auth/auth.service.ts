import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import {JwtService} from "@nestjs/jwt"
import * as bcrypt from 'bcrypt';
import { LoginDto } from "src/dto/auth.dto";

@Injectable()
export class AuthService {
    private readonly saltRounds = 10;
    constructor(
        private jwtService : JwtService,
        private configService : ConfigService
    ) { }

    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, this.saltRounds);
      }
    
      async comparePasswords(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
      }

    async generateToken(payload : LoginDto) : Promise<String> {
        return await this.jwtService.signAsync(payload);
    }
}