import { AnswerType } from "src/common/constants/answer-type.enum";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Option } from "./option.entity";

@Entity()
export class Answer {
    @PrimaryGeneratedColumn({
        name : 'answerId'
    })
    id : number;

    @Column({
        type : 'text' 
     })
     descriptiveAnswer : string;    

    @ManyToMany(
        ()=>Option,
        (option) => option.answers
    )
    @JoinTable()
    options : Option[];

}