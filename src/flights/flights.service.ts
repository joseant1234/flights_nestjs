import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flight } from './flight.entity';
import { CreateFlightDto } from './dto/create-flight.dto';
import { Rate } from '../rates/rate.entity';

@Injectable()
export class FlightsService {

  constructor(
    @InjectRepository(Flight) private readonly flightRepository: Repository<Flight>,
    @InjectRepository(Rate) private readonly rateRepository: Repository<Rate>,
  ) {}

  findAll(): Promise<Flight[]> {
    return this.flightRepository.find();
  }

  async create(flightDto: CreateFlightDto): Promise<Flight> {

    const rate = await this.rateRepository.findOne(flightDto.rateId);
    if (rate) {
      const flight = this.flightRepository.create({...flightDto, rate });
      return this.flightRepository.save(flight);
    }
    return;

  }

}
