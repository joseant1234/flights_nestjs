import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flight } from './flight.entity';


@Injectable()
export class FlightsService {

  constructor(
    @InjectRepository(Flight) private readonly flightRepository: Repository<Flight>,
  ) {}

  findAll(): Promise<Flight[]> {
    return this.flightRepository.find();
  }

}
