import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Task} from "./task.entity";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    name: string;

    @Column()
    password: string;

    @OneToMany(() => Task, (task) => task.user)
    tasks: Task[]
}