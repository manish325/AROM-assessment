import { Controller } from "@nestjs/common";
import { QuestionService } from "./questions.service";

@Controller('questions')
export class QuestionController {
    constructor(
        private questionService : QuestionService
    ) {

    }
}