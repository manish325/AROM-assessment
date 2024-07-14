import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Assessment } from "src/entities/assessment.entity";
import { Repository } from "typeorm";

@Injectable()
export class AssessmentService {
    constructor(
        @InjectRepository(Assessment)
        private assessmentRepo : Repository<Assessment>
    ) {}
}