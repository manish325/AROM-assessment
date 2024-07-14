import { BadRequestException, Body, ConflictException, Controller, Get, HttpException, HttpStatus, Post, UnauthorizedException, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto, RegisterUserDto } from "src/dto/auth.dto";
import { UserService } from "../user/user.service";
import { RESPONSE_PHRASES } from "src/common/constants/response_phrases.enum";
import { ApplicationResponse } from "src/dto/response.dto";
import { JwtAuthGuard } from "src/guards/jwt.guard";
import { ApiBearerAuth } from "@nestjs/swagger";

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private userService: UserService
    ) { }

    @Post('login')
    async login(@Body() loginData: LoginDto) {
        try {
            const { email, password } = loginData;
            const user = await this.userService.getUserByEmail(email);
            if (!user) {
                throw new BadRequestException(
                    RESPONSE_PHRASES.USER_NOT_FOUND
                )
            }
            const hashedPassword = user.password;
            const isPasswordMatched = await this.authService.comparePasswords(password, hashedPassword);
            if (!isPasswordMatched)
                throw new UnauthorizedException(RESPONSE_PHRASES.PASSWORD_NOT_MATCHED)
            const authToken = await this.authService.generateToken(loginData);
            return new ApplicationResponse(
                HttpStatus.OK,
                RESPONSE_PHRASES.LOGIN_SUCCESSFUL,
                {
                    token: authToken
                }
            )
        } catch (e) {
            console.error(e);
            throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post("register")
    async register(@Body() registerUserDto: RegisterUserDto) {
        try {
            const { password } = registerUserDto;
            const alreadyExistUser = await this.userService.getUser(registerUserDto);
            console.log('Logging the already exist user : ', alreadyExistUser);
            if(alreadyExistUser) {
                throw new ConflictException(RESPONSE_PHRASES.USER_ALREADY_EXISTS);
            }
            const hashedPassword = await this.authService.hashPassword(password);
            const createdUser = await this.userService.createUser({ ...registerUserDto, password: hashedPassword });
            const authToken = await this.authService.generateToken({
                email : registerUserDto.email,
                password : registerUserDto.password
            });
            return new ApplicationResponse(
                HttpStatus.CREATED,
                RESPONSE_PHRASES.USER_CREATED,
                {
                    token : authToken
                }
            )
        } catch (e) {
            throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}