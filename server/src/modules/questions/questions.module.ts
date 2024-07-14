import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from 'src/entities/questions.entity';
import { QuestionController } from './questions.controller';
import { QuestionService } from './questions.service';

@Module({
    imports : [TypeOrmModule.forFeature([Question])],
    controllers : [QuestionController],
    providers : [QuestionService],
    exports : [QuestionService]
})
export class QuestionsModule {}
