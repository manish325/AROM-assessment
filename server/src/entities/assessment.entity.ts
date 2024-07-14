import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { BodyPart } from "./body-part.entity";
import { IQuestions } from "src/common/types";

@Entity()
export class Assessment {
    @PrimaryGeneratedColumn({
        name : 'assesmentId'
    })
    id  : number;

    @ManyToOne(
        ()=>User,
        (user) => user.assesments
    )
    user : User;

   @ManyToOne(
    ()=>BodyPart,
    (bodypart) => bodypart.assessments
   )
   bodyPart : BodyPart;

   @Column({
    type : 'json'
   })
   questions : IQuestions[];
}