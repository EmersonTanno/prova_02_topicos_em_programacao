import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ nullable: false })
    name: string

    @Column({ nullable: false })
    email: string

    @Column({ nullable: false })
    password: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}