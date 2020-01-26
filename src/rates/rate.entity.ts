import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Flight } from '../flights/flight.entity';
import { IRate } from './rate.interface';

@Entity()
export class Rate implements IRate{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  origin: string;

  @Column()
  destination: string;

  @Column()
  price: number;

  @OneToMany(type => Flight, flight => flight.rate)
  flights: Flight[];

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
