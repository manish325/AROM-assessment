import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
@Injectable()
export class BCryptService {
    private readonly saltRounds = 10;
    constructor() {}

    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, this.saltRounds);
      }
    
      async comparePasswords(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
      }
}