import { Module } from '@nestjs/common';
import { Rate } from '../rates/rate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flight } from '../flights/flight.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rate, Flight])],
  exports: [TypeOrmModule]
})
export class SharedModule {}
