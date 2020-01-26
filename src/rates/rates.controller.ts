import { Controller, Get, Body, Post, UsePipes } from '@nestjs/common';
import { Rate } from './rate.entity';
import { RatesService } from './rates.service';
import { IRate } from './rate.interface';
import { CreateRateDto } from './dto/create-rate.dto';
import { ValidationPipe } from '../common/validation.pipe';

@Controller('rates')
export class RatesController {

  constructor(private readonly ratesService: RatesService) {}

  @Get()
  async index(): Promise<Rate[]> {
    return this.ratesService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() rate: CreateRateDto) {
    return this.ratesService.create(rate);
  }
}
