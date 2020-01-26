import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Rate } from '../rates/rate.entity';

@Entity()
export class Flight {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  depatureAt: Date;

  @Column()
  arrivalAt: Date;

  @ManyToOne(type => Rate, rate => rate.flights)
  rate: Rate;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: string;

}
