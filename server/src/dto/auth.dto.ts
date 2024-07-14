import {IsEmail, IsMobilePhone, IsNotEmpty, IsString} from "class-validator"
import { RESPONSE_PHRASES } from "src/common/constants/response_phrases.enum";
import {ApiProperty, ApiPropertyOptions} from "@nestjs/swagger";

export class LoginDto {
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
     readonly email : string;

     @IsString()
     @IsNotEmpty({
        message : RESPONSE_PHRASES.PASSWORD_REQUIRED
     })
     @ApiProperty()
     readonly password : string;
}

export class RegisterUserDto {
    @IsEmail()
    @IsNotEmpty({
        message : RESPONSE_PHRASES.EMAIL_REQUIRED
    })
    @ApiProperty()
    readonly email : string;

    @IsNotEmpty()
    @IsString()
    readonly firstName : string;

    @IsNotEmpty()
    @IsString()
    readonly lastName : string;

    @IsString()
    @IsNotEmpty({
        message : RESPONSE_PHRASES.PASSWORD_REQUIRED
    })
    @ApiProperty()
    readonly password : string;

    @IsString()
    @IsNotEmpty({
        message  : RESPONSE_PHRASES.USERNAME_REQUIRED
    })
    @ApiProperty()
    readonly username : string;

    @IsMobilePhone()
    @IsString()
    @ApiProperty()
    readonly mobile : string;
}