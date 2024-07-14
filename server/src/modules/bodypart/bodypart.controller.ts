import { Controller } from "@nestjs/common";
import { BodyPartService } from "./bodypart.service";

@Controller()
export class BodyPartController {
    constructor(private bodyPartServie : BodyPartService) {}
}