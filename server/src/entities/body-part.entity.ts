import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Position } from "./position.entity";
import { ALIGNMENTS } from "src/common/constants/alignment.enum";
import { Exercise } from "./exercise.entity";
import { Assessment } from "./assessment.entity";

@Entity()
export class BodyPart {
    @PrimaryGeneratedColumn({
        name : 'bodypartid'
    })
    id : number;

    @Column()
    bodyPartName : string;

    @Column({
        nullable : false,
        type :"text"
    })
    bodyPartImage : string;

    @ManyToMany(
        ()=>Position,
        (position) => position.bodyParts
    )
    positions : Position[];

    @ManyToMany(
        ()=>Exercise,
        (exercise) => exercise.bodyParts
    )
    exercises : Exercise[];

    @OneToMany(() => Assessment, assessment => assessment.bodyPart)
    assessments: Assessment[];
}