import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Position } from "src/entities/position.entity";
import { Repository } from "typeorm";

@Injectable()
export class PositionService {
    constructor(
        @InjectRepository(Position)
        private positionRepo : Repository<Position>
    ) {}

    async getAllPositions () {
        return await this.positionRepo.find();
    }
}