import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assessment } from 'src/entities/assessment.entity';
import { AssessmentController } from './assessment.controller';
import { AssessmentService } from './assessment.service';

@Module({
    imports : [TypeOrmModule.forFeature([Assessment])],
    controllers : [AssessmentController],
    providers : [AssessmentService],
    exports : [AssessmentService]
})
export class AssessmentModule {}
