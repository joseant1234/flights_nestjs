import { Module } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { Flight } from './flight.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightsController } from './flights.controller';
import { Rate } from '../rates/rate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Flight, Rate])],
  providers: [FlightsService],
  controllers: [FlightsController],
  exports: [TypeOrmModule]
})
export class FlightsModule {}
