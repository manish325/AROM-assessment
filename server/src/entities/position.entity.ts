import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { BodyPart } from "./body-part.entity";

@Entity()
export class Position {
    @PrimaryGeneratedColumn({
        name : 'positionId'
    })
    id : number;

    @Column({
        nullable : false
    })
    positionName : string;

    @Column(
        {
            nullable : false,
            type : 'text'
        }
    )
    positionImage : string;

    @ManyToMany(
        ()=>BodyPart,
        (bodyPart) => bodyPart.positions
    )
    @JoinTable()
    bodyParts : BodyPart[]
}