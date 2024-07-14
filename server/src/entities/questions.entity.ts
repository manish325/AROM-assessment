import { Column, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Exercise } from "./exercise.entity";
import { Answer } from "./answer.entity";
import { Option } from "./option.entity";
import { AnswerType } from "src/common/constants/answer-type.enum";

@Entity()
export class Question {
    @PrimaryGeneratedColumn({
        name : 'questionId'
    })
    id : number;
    
    @Column()
    questionName : string;

    @Column({
        type : 'enum',
        enum : AnswerType
    })
    answerType : AnswerType;

    @ManyToMany(
        ()=>Exercise,
        (exercise) => exercise.questions
    )
    exercises : Exercise[];

    @ManyToMany(
        ()=>Option,
        (option) => option.questions
    )
    @JoinTable()
    options : Option[];

}