import { Controller } from "@nestjs/common";
import { AssessmentService } from "./assessment.service";

@Controller()
export class AssessmentController {
    constructor(
        private assessment : AssessmentService
    ) {}
}