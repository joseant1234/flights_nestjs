import { Controller, Get, Body, Post, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { Flight } from './flight.entity';
import { FlightsService } from './flights.service';
import { CreateFlightDto } from './dto/create-flight.dto';

@Controller('flights')
export class FlightsController {

  constructor(private readonly flightsService: FlightsService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async index(): Promise<Flight[]> {
    return this.flightsService.findAll();
  }

  @Post()
  async create(@Body() flight: CreateFlightDto): Promise<Flight> {
    return this.flightsService.create(flight);
  }
}
