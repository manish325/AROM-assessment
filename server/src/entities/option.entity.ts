import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Answer } from "./answer.entity";
import { Question } from "./questions.entity";

@Entity()
export class Option {
    @PrimaryGeneratedColumn({
        name : 'optionId'
    })
    id : number;

    @Column({
        nullable : false
    })
    optionName : string;

    @ManyToMany(
        () => Question,
        (question) => question.options
    )
    questions : Question[];

    @ManyToMany(
        () => Answer,
        (answer) => answer.options
    )
    answers : Answer[];

}