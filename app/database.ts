import { Entity, Column, createConnection, Connection, PrimaryGeneratedColumn } from "typeorm";

export const initialize = () => createConnection({
    type: 'postgres',
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    entities: [Subscription],
    synchronize: true
});

@Entity()
export class Subscription {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    url!: string;

    @Column({
        length:  32
    })
    channelId!: string;

    @Column()
    isActive!: boolean;

    @Column({
        type: 'timestamp with time zone',
        nullable: true
    })
    latestItemDate!: Date;

    @Column({
        type: 'timestamp with time zone'
    })
    createdAt!: Date;

}
