import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from "@nestjs/common";
import { Exercise } from 'src/entities/exercise.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExerciseService {
    constructor(
        @InjectRepository(Exercise)
        private exerciseRepo : Repository<Exercise>
    ) {}
}