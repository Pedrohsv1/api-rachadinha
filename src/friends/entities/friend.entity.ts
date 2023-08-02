import { Rachadinha } from 'src/rachadinha/entities/rachadinha.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Friend {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: true })
  url: string;

  @Column({ nullable: true })
  email: string;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.friends, { onDelete: 'CASCADE' })
  user: User;

  @OneToMany(() => Rachadinha, (rachadinha) => rachadinha.friend)
  rachadinhas: Rachadinha[];
}
