import { 
    Entity, 
    PrimaryGeneratedColumn, 
    JoinColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    UpdateDateColumn
} from 'typeorm';

import { User } from './Users';

@Entity()
export class Pix {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    status: string;
    
    @ManyToOne(() => User, user => user.id)
    @JoinColumn()
    requestingUser: User;

    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn()
    payingUser: User;

    @Column()
    value: number;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}