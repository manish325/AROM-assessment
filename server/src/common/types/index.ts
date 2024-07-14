import { Question } from "src/entities/questions.entity";

export interface IQuestions extends Question {
    answer : 'string'
}