import { BadRequestException, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { JwtAuthGuard } from "src/guards/jwt.guard";
import { ApiBearerAuth } from "@nestjs/swagger";

@Controller('user')
export class UserController {
    constructor(
        private userService : UserService
    ) {}

    @Post('testToken')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    testRoute() {
        return "Test Route Working!";
        throw new BadRequestException("This is a Bad Request!");
    }
}
