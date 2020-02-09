import { Controller, Get, Body, Post, UseInterceptors, ClassSerializerInterceptor, Query } from '@nestjs/common';
import { Airport } from './airport.entity';
import { AirportsService } from './airports.service';
import { CreateAirportDto } from './dto/create-airport.dto';
import { ListAirportDto } from './dto/list-airport.dto';

@Controller('airports')
export class AirportsController {

  constructor(private readonly airportsService: AirportsService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async index(@Query() query: ListAirportDto): Promise<Airport[]> {
    return this.airportsService.findAll(query);
  }

  @Post()
  async create(@Body() airport: CreateAirportDto): Promise<Airport> {
    return this.airportsService.create(airport);
  }

  @Post('/syncronize')
  syncronize(): Promise<Airport[]> {
    return this.airportsService.syncronize();
  }
}
