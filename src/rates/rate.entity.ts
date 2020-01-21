import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Flight } from '../flights/flight.entity';

@Entity()
export class Rate {

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



}
