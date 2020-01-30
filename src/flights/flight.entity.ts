import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Rate } from '../rates/rate.entity';
import { IFlight } from './flight.interface';

@Entity()
export class Flight implements IFlight{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  departureAt: Date;

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
