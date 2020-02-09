import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['iata'])
export class Airport {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  iata: string;

  @Column()
  city: string;

  @Column()
  country: string;

  // @ManyToOne(type => Rate, rate => rate.flights)
  // rate: Rate;

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
