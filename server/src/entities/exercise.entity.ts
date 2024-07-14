import { ALIGNMENTS } from "src/common/constants/alignment.enum";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { BodyPart } from "./body-part.entity";
import { SrcType } from "src/common/constants/src.enum";
import { Question } from "./questions.entity";

@Entity()
export class Exercise {
    @PrimaryGeneratedColumn({
        name : 'exerciseId'
    })
    id : number;

    @Column()
    exerciseName : string;

    @Column({
        type : "enum",
        enum : ALIGNMENTS,
        default : ALIGNMENTS.RIGHT
    })
    alignment : ALIGNMENTS;

    @Column({
        nullable : false,
        type : 'text'
    })
    src : string;

    @Column({
        type : 'enum',
        enum : SrcType,
        default : SrcType.IMAGE
    })
    sourceType : SrcType;

    @ManyToMany(
        ()=>BodyPart,
        (bodypart) => bodypart.exercises
    )
    @JoinTable()
    bodyParts : BodyPart[];

    @ManyToMany(
        ()=>Question,
        (question) => question.exercises
    )
    questions : Question[]
}