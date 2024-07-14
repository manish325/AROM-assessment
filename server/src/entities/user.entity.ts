import {Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Assessment } from "./assessment.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn({
        name : 'userId'
    })
    id : number;

    @Column({
        unique : true,
        nullable : false
    })
    username : string;

    @Column({
        unique : true,
        nullable : false
    })
    email : string;

    @Column({
        nullable : true
    })
    password : string;

    @Column({
        unique : true
    })
    mobile : string;

    @Column()
    firstName : string;

    @Column()
    lastName : string;

    @Column({
        type : 'boolean',
        default : false
    })
    isAuthenticatedViaGoogle : boolean;

    @Column({
        type : 'text'
    })
    profilePicture : string;

    @OneToMany(
        ()=>Assessment,
        (assesment) => assesment.user
    )
    assesments : Assessment[]

}