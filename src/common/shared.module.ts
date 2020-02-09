import { Module } from '@nestjs/common';
import { Rate } from '../rates/rate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flight } from '../flights/flight.entity';
import { Airport } from '../airports/airport.entity';
import { Unique } from './validator/unique';

@Module({
  imports: [TypeOrmModule.forFeature([Rate, Flight, Airport])],
  exports: [TypeOrmModule],
  providers: [Unique]
})
export class SharedModule {}
