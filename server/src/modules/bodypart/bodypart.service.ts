import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BodyPart } from "src/entities/body-part.entity";
import { Repository } from "typeorm";

@Injectable()
export class BodyPartService {
    constructor(
        @InjectRepository(BodyPart)
        private bodyPartRepo : Repository<BodyPart>
    ) {}
}