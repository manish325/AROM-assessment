import { BadRequestException, Controller, Get, HttpStatus, UseGuards } from "@nestjs/common";
import { PositionService } from "./positions.service";
import { ApplicationResponse } from "src/dto/response.dto";
import { RESPONSE_PHRASES } from "src/common/constants/response_phrases.enum";
import { JwtAuthGuard } from "src/guards/jwt.guard";
import { ApiBearerAuth } from "@nestjs/swagger";

@Controller('position')
export class PositionController {
    constructor(private positionService : PositionService) {}

    @Get('allPositions')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    async getAllPositions () {
        try {
            const positions = await this.positionService.getAllPositions();
            return new ApplicationResponse(
                HttpStatus.ACCEPTED,
                RESPONSE_PHRASES.REQUEST_SUCCESSFUL,
                positions
            )
        } catch(e) {
            throw new BadRequestException(e);
        }
    }
}
