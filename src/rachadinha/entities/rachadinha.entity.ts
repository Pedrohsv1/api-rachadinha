import { Friend } from 'src/friends/entities/friend.entity';
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Rachadinha {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  valor: number;

  @Column({ nullable: true })
  limit: Date;

  @ManyToOne(() => Friend, (friend) => friend.rachadinhas, {
    onDelete: 'CASCADE',
  })
  friend: Friend;
}
