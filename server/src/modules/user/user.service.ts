import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RegisterUserDto } from "src/dto/auth.dto";
import { User } from "src/entities/user.entity";
import { Repository, FindOneOptions } from "typeorm";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async getUserByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                email: email
            }
        })
    }

    async createUser(userdata: RegisterUserDto): Promise<User> {
        const { email, mobile, username, password, firstName, lastName } = userdata;
        const newUser = new User();
        newUser.email = email;
        newUser.password = password;
        newUser.mobile = mobile;
        newUser.username = username;
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        return await this.userRepository.save(newUser);
    }

    async getUser(userData: RegisterUserDto) {
        console.log('Recieved user is', userData);
        return this.userRepository.createQueryBuilder('user')
        .where('user.email = :email', { email: userData.email })
        .orWhere('user.username = :username', { username: userData.username })
        .orWhere('user.mobile = :mobile', {mobile : userData.mobile})
        .getOne();

    }
}