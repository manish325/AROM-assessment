import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Question } from "src/entities/questions.entity";
import { Repository } from "typeorm";

@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(Question)
        private questionRepo : Repository<Question>
    ) {}
}