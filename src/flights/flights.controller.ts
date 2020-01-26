import { Controller, Get } from '@nestjs/common';
import { Flight } from './flight.entity';
import { FlightsService } from './flights.service';

@Controller('flights')
export class FlightsController {

  constructor(private readonly flightsService: FlightsService) {}

  @Get()
  async index(): Promise<Flight[]> {
    return this.flightsService.findAll();
  }
}
